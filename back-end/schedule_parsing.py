import re

def parse_courses(schedule_text):
    courses = {} # Creating dictionary to store course information
    lines = schedule_text.split("\n")

    for line in lines:
        line = line.strip()

        if re.match(r"([A-Z]{3}[0-9]{3}(H|Y)(5|1)) (F|S)", line[:10]): # Matching to course code to find beginning of course information
            # Course code and semester
            course_key = line[:10]
            
            # Adding course as a key, with a list for sections as value
            courses[course_key] = []

        elif re.match(r"^(LEC|TUT|PRA) \d{4}", line): # Section information        
            # Variable "course_code" is the same as long as we did not find a new course code
            # Adding the section we found to the "sections" list
            courses[course_key].append(line) 
        
    return courses