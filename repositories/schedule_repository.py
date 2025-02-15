from models.enrollment import Enrollment
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError

class ScheduleRepository:
    def __init__(self, session: Session):
        self.session = session

    def get_schedule_by_student(self, email):
        try:
            enrollments = self.session.query(Enrollment).filter(Enrollment.email == email).all()
            return enrollments
        except SQLAlchemyError as e:
            print(f"Error fetching schedule: {e}")
            return []
