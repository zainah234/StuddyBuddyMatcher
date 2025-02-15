import re

# Opening file that contains the course information
# Could change this later to fit form
file_path = "sample_schedule.txt"
file = open(file_path)

courses = {} # Creating dictionary to store course information
line = file.readline() # First line

while line: # As long as there is a new line
    if re.match(r"[A-Z]{3}[0-9]{3}(H|Y)(5|1) (F|S)", line[:10]): # Matching to course code to find beginning of course information
        # Course code and semester
        splits = line.split(" ") # Course code and semester are separated by a space

        course_code = splits[0] # ex. CSC148H5
        semester = splits[1] # F/S

        # Adding course code as a key, with a dictionary as value
        # In sub-dictionary, adding "semester" key and value, adding "sections" key with empty list
        courses[course_code] = {
            "semester": semester,
            "sections": []
        }

    elif re.match(r"^(LEC|TUT|PRA) \d{4}", line.strip()): # Section information
        section = line.strip() # Remove whitespace at the end
        
        # Variable "course_code" is the same as long as we did not find a new course code
        # Adding the section we found to the "sections" list
        courses[course_code]["sections"].append(section) 
    
    line = file.readline()  # Read next line

        
file.close()
print(courses)