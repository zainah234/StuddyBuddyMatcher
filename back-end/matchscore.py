def generate_match(students_dict, main_id, secondary_id):
    # return match score and matched sections 

    main_courses = students_dict[main_id]
    secondary_courses = students_dict[secondary_id]
    
    matched_courses = {course for course in main_courses if course in secondary_courses}
    
    matched_sections = {}
    course_match_count = len(matched_courses)
    section_match_count = 0


    for course in matched_courses:

        main_sections = main_courses[course]
        secondary_sections = secondary_courses[course]

        common_sections = [section for section in main_sections if section in secondary_sections]

        matched_sections[course] = common_sections
        section_match_count += len(common_sections)

    return (course_match_count, section_match_count, matched_sections)

def sort_matches(students_dict, main_id):
    
    matches = {} #student id: generate matches 

    for student_id in students_dict:
        if student_id != main_id:
            match = generate_match(students_dict, main_id, student_id)

            if match[0] > 0:
                matches[student_id] = match
    
    sorted_matches = sorted(matches.items(), key = lambda x: (-x[1][0], -x[1][1]))

    return sorted_matches