from flask import Blueprint, request, jsonify, abort

from repositories.course_repository import CourseRepository
from repositories.student_repository import StudentRepository
from repositories.schedule_repository import ScheduleRepository
from repositories.base import SessionLocal

bp = Blueprint('students', __name__, url_prefix='/students')

@bp.route('/all', methods=['GET'])
def get_students():
    session = SessionLocal()
    student_repo = StudentRepository(session)
    students = student_repo.get_students()
    return jsonify([student.to_dict() for student in students])

@bp.route('/<string:email>', methods=['GET'])
def get_student(email):
    session = SessionLocal()
    student_repo = StudentRepository(session)
    student = student_repo.get_student_by_id(email)
    if student is None:
        abort(404)
    return jsonify(student.to_dict())

@bp.route('/', methods=['POST'])
def add_student():
    session = SessionLocal()
    student_repo = StudentRepository(session)
    data = request.get_json()
    email = data.get('email')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    post = data.get('post')
    insta = data.get('insta')
    discord = data.get('discord')
    phone_nr = data.get('phone_nr')
    facebook = data.get('facebook')
    whatsapp = data.get('whatsapp')
    pronouns = data.get('pronouns')
    password = data.get('password')


    new_student = student_repo.add_student(email, first_name, last_name, pronouns, post, insta, discord, facebook, whatsapp, phone_nr, password)
    if new_student:
        session.commit()
        return jsonify(new_student.to_dict()), 201
    else:
        abort(500)

@bp.route('/<int:sid>', methods=['DELETE'])
def delete_student(sid):
    session = SessionLocal()
    student_repo = StudentRepository(session)
    success = student_repo.delete_student(sid)
    if success:
        session.commit()
        return '', 204
    else:
        abort(404)

@bp.route('/<string:email>/courses', methods=['GET'])
def retrieve_courses_for_student(email):
    session = SessionLocal()
    schedule_repo = ScheduleRepository(session)
    enrollments = schedule_repo.get_schedule_by_student(email)

    if not enrollments:
        return jsonify([])
    courses = [enrollment.cid for enrollment in enrollments]
    return jsonify(courses)


@bp.route('/<int:cid>', methods=['GET'])
def get_course(cid):
    session = SessionLocal()
    course_repo = CourseRepository(session)
    course = course_repo.get_course_by_id(cid)

    if not course:
        abort(404, description="Course not found")

    return jsonify(course.to_dict())


@bp.route('/<string:email>/profile', methods=['GET'])
def get_student_profile(email):
    session = SessionLocal()
    student_repo = StudentRepository(session)
    schedule_repo = ScheduleRepository(session)
    course_repo = CourseRepository(session)

    student = student_repo.get_student_by_id(email)
    if not student:
        abort(404, description="Student not found")

    enrollments = schedule_repo.get_schedule_by_student(email)
    course_objects = [course_repo.get_course_by_id(enrollment.cid) for enrollment in enrollments]

    courses = [
        {
            "course_id": course_obj.cid,
            "course_name": course_obj.course_name,
            "lec_sections": course_obj.lec_sections,
            "tut_sections": course_obj.tut_sections,
            "pra_sections": course_obj.pra_sections
        }
        for course_obj in course_objects
    ]

    # JSON response
    student_profile = {
        "email": student.email,
        "first_name": student.first_name,
        "last_name": student.last_name,
        "pronouns": student.pronouns,
        "post": student.post,
        "insta": student.insta,
        "discord": student.discord,
        "facebook": student.facebook,
        "whatsapp": student.whatsapp,
        "phone_nr": student.phone_nr,
        "courses": courses
    }

    return jsonify(student_profile)
