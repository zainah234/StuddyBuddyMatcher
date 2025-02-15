def generate_match(students_dict, main_id, secondary_id):
    # return match score and matched sections 


    main_courses = students_dict[main_id]
    secondary_courses = students_dict[secondary_id]
    
    matched_courses = {course for course in main_courses if course in secondary_courses}
    
    matched_sections = {}
    match_score = len(matched_courses)

    for course in matched_courses:
        main_sections = main_courses[course]
        secondary_sections = secondary_courses[course]

        common_sections = [section for section in main_sections if section in secondary_sections]

        matched_sections[course] = common_sections
        match_score += len(common_sections)

    return (match_score, matched_sections)

def sort_matches(students_dict, main_id):
    
    matches = {} #student id: generate matches 

    for student_id in students_dict:
        if student_id != main_id:
            match = generate_match(students_dict, main_id, student_id)


            if match[0] > 0:
                matches[student_id] = match
    
    sorted_matches = sorted(matches.items(), key = lambda x: x[1][0], reverse = True)

    return sorted_matches


students_dict = {
    "student1": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],
        "MAT236H5 F": ["LEC 0101", "TUT 0103"],
    },
    "student2": {
        "BIO362H5 F": ["LEC 0101"],  # Partial match with student1
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],  # Full match with student1
        "MAT236H5 F": ["LEC 0201"],  # Different section, no match
    },
    "student3": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],  # Fully matches student1
        "MAT236H5 F": ["LEC 0101"],  # Shared lecture with student1
    },
    "student4": {
        "CSC236H1 F": ["LEC 5101"],  # Partial match (only LEC)
    },
    "student5": {
        "MAT236H5 F": ["LEC 0101", "TUT 0103"],  # Full match with student1
        "CSC236H1 F": ["LEC 5101"],  # Partial match with student1
    },
    "student6": {
        "BIO362H5 F": ["LEC 0201"],  # Different section, no match
        "CSC236H1 F": ["LEC 5201"],  # Different section, no match
    },
    "student7": {
        "BIO362H5 F": ["LEC 0101", "PRA 0101"],  # Fully matches student1
        "CSC236H1 F": ["LEC 5101", "TUT 5103"],  # Fully matches student1
        "MAT236H5 F": ["LEC 0101", "TUT 0103"],  # Fully matches student1
    },
}

top_matches_result = sort_matches(students_dict, "student1")
print(top_matches_result)