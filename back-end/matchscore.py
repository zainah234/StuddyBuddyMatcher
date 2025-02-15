def generate_matchscore(students_dict, main_id, secondary_id):
    # return match score and matched sections 


    main_courses = students_dict[main_id]

    secondary_courses = students_dict[secondary_id]
    
    matched_courses = {course for course in main_courses if course in secondary_courses}
    matched_sections = {}
    match_score = 0

    for course in matched_courses:
        main_sections = main_courses[course]['sections']
        secondary_sections = secondary_courses[course]['sections']

        common_sections = [section for section in main_sections if section in secondary_sections]

        if common_sections:
            matched_sections[course] = common_sections
            match_score += len(common_sections)

    return (match_score, matched_sections)

students = {
    "student1": {
        "BIO362H5": {"semester": "F", "sections": ["LEC 0101", "PRA 0101"]},
        "CSC236H1": {"semester": "F", "sections": ["LEC 5101", "TUT 5103"]},
        "MAT236H5": {"semester": "F", "sections": ["LEC 0101", "TUT 0103"]},
    },
    "student2": {
        "BIO362H5": {"semester": "F", "sections": ["LEC 0101"]},
        "CSC236H1": {"semester": "F", "sections": ["LEC 5101", "TUT 5103"]},
        "MAT236H5": {"semester": "F", "sections": ["LEC 0201"]},
    }
}

result = generate_matchscore(students, "student1", "student2")
print(result)