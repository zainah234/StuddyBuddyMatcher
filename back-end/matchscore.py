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


students_dict = {
    "student1": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],
        "MAT236H5 F": ["LEC 0101", "TUT 0103"],
    },
    "student2": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],
        "MAT236H5 F": ["LEC 0101", "TUT 0103"],
    },
    "student3": {
        "BIO362H5 F": ["LEC 0101"],
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],
        "MAT236H5 F": ["LEC 0101"],
    },
    "student4": {
        "BIO362H5 F": ["LEC 0101"],
        "CSC236H1 F": ["LEC 5101"],
        "MAT236H5 F": ["LEC 0201"],
    },
    "student5": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],
    },
    "student6": {
        "BIO362H5 F": ["LEC 0101"],
        "CSC236H1 F": ["LEC 5101"],
    },
    "student7": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],
    },
    "student8": {
        "BIO362H5 F": ["LEC 0201"],
    },
    "student9": {
        "PHY100H5 F": ["LEC 0101"],
    },
}

top_matches_result = sort_matches(students_dict, "student1")
print(top_matches_result)
