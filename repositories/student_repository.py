from models.student import Student
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError

import bcrypt

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password.decode('utf-8')
class StudentRepository:
    def __init__(self, session: Session):
        self.session = session

    def get_students(self):
        try:
            return self.session.query(Student).all()
        except SQLAlchemyError as e:
            print(f"Error fetching students: {e}")
            return []

    def get_student_by_id(self, email):
        try:
            return self.session.query(Student).filter(Student.email == email).first()
        except SQLAlchemyError as e:
            print(f"Error fetching student: {e}")
            return None

    def add_student(self, email, first_name, last_name, pronouns, post, insta, discord, facebook, whatsapp, phone_nr, password):
        new_student = Student(
            email=email,
            first_name=first_name,
            last_name=last_name,
            pronouns=pronouns,
            post=post,
            insta=insta,
            discord=discord,
            facebook=facebook,
            whatsapp=whatsapp,
            phone_nr=phone_nr,
            password=hash_password(password)
        )
        try:
            self.session.add(new_student)
            self.session.commit()
            return new_student
        except SQLAlchemyError as e:
            self.session.rollback()
            print(f"Error adding student: {e}")
            return None

    def delete_student(self, email):
        try:
            student = self.session.query(Student).filter(Student.email == email).first()
            if student:
                self.session.delete(student)
                self.session.commit()
                return True
            return False
        except SQLAlchemyError as e:
            self.session.rollback()
            print(f"Error deleting student: {e}")
            return False
