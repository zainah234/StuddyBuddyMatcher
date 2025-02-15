import re

# Opening file that contains the course information
# Could change this later to fit form
file_path = "back-end\sample_schedule.txt"
file = open(file_path)

courses = {} # Creating dictionary to store course information
line = file.readline() # First line

while line: # As long as there is a new line
    if re.match(r"([A-Z]{3}[0-9]{3}(H|Y)(5|1)) (F|S)", line[:10]): # Matching to course code to find beginning of course information
        # Course code and semester

        course_key = line[:10]
        
        # Adding course as a key, with a list for sections as value
        courses[course_key] = []

    elif re.match(r"^(LEC|TUT|PRA) \d{4}", line.strip()): # Section information
        section = line.strip() # Remove whitespace at the end
        
        # Variable "course_code" is the same as long as we did not find a new course code
        # Adding the section we found to the "sections" list
        courses[course_key].append(section) 
    
    line = file.readline()  # Read next line
        
file.close()
print(courses)