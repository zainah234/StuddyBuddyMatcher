from sqlalchemy import Column, String, Enum, Integer
from repositories.base import Base

class Course(Base):
    __tablename__ = 'course'

    cid = Column(Integer, primary_key=True, autoincrement=True)
    course_name = Column(String(255), nullable=False)
    lec_sections = Column(Enum('LEC0101', 'LEC0102', 'LEC0103', name="lec_sections_enum"), nullable=False) # TO DO: add all possible section types with regex
    tut_sections = Column(Enum('TUT0101', 'TUT0102', 'TUT0103', 'TUT0104', 'TUT0105', name="tut_sections_enum"))  # TO DO: add all possible section types with regex
    pra_sections = Column(Enum('PRA0101', 'PRA0102', 'PRA0103', 'PRA0104', 'PRA0105', name="pra_sections_enum"))  # TO DO: add all possible section types with regex

    def to_dict(self):
        return {
            'cid': self.cid,
            'course_name': self.course_name, # ex: BIO362H5F
            'lec_sections': self.lec_sections,
            'tut_sections': self.tut_sections,
            'pra_sections': self.pra_sections
        }

    def create_course_instance(self):
        return {self.cid: [self.lec_sections, self.tut_sections, self.pra_section]} # TO DO: remove NULL values later
