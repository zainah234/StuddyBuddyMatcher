from sqlalchemy import Column, String, Enum
from repositories.base import Base

class Student(Base):
    __tablename__ = 'student'

    email = Column(String, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String)
    pronouns = Column(Enum('she/her', 'he/him', 'they/them', 'other', name="pronouns_enum"))
    post = Column(String)
    insta = Column(String)
    discord = Column(String)
    facebook = Column(String)
    whatsapp = Column(String)
    phone_nr = Column(String)
    password = Column(String)

    def to_dict(self):
        return {
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'pronouns': self.pronouns,
            'post': self.post,
            'insta': self.insta,
            'discord': self.discord,
            'facebook': self.facebook,
            'whatsapp': self.whatsapp,
            'phone_nr': self.phone_nr
        }

