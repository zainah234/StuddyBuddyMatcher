from models.course import Course
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError


class CourseRepository:
    def __init__(self, session: Session):
        self.session = session

    def get_course_by_id(self, cid):
        try:
            return self.session.query(Course).filter(Course.cid == cid).first()
        except SQLAlchemyError as e:
            print(f"Error fetching course with id {cid}: {e}")
            return None

    def add_course(self, cid, course_name, lec_sections, tut_sections, pra_sections):
        new_course = Course(
            cid=cid,
            course_name=course_name,
            lec_sections=lec_sections,
            tut_sections=tut_sections,
            pra_sections=pra_sections
        )
        try:
            self.session.add(new_course)
            self.session.commit()
            return new_course
        except SQLAlchemyError as e:
            self.session.rollback()
            print(f"Error adding course: {e}")
            return None

    def delete_course(self, cid):
        try:
            course = self.session.query(Course).filter(Course.cid == cid).first()
            if course:
                self.session.delete(course)
                self.session.commit()
                return True
            return False
        except SQLAlchemyError as e:
            self.session.rollback()
            print(f"Error deleting course {cid}: {e}")
            return False
