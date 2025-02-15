from sqlalchemy import Column, String, ForeignKey
from repositories.base import Base

class Enrollment(Base):
    __tablename__ = 'enrollment'

    email = Column(String, ForeignKey("student.email"), primary_key=True)
    cid = Column(String, ForeignKey("course.cid"), primary_key=True)

    def to_dict(self):
        return {
            'email': self.email,
            'cid': self.cid
        }
