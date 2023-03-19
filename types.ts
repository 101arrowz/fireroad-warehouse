export type Subject = {
  subject_id: string,
  title: string,
  total_units: number,
  offered_fall: boolean,
  offered_IAP: boolean,
  offered_spring: boolean,
  offered_summer: boolean,
  public: boolean,

  level?: "U" | "G",
  is_historical?: boolean,
  source_semester?: string,
  joint_subjects?: string[],
  equivalent_subjects?: string[],
  meets_with_subjects?: string[],
  quarter_information?: string,
  not_offered_year?: string,
  instructors?: string[],
  communication_requirement?: "CI-H" | "CI-HW",
  hass_attribute?: string,
  gir_attribute?: string,
  children?: string[],
  parent?: string,
  old_id?: string,

  lecture_units: number,
  lab_units: number,
  design_units: number,
  preparation_units: number,
  is_variable_units: boolean,
  is_half_class: boolean,
  has_final: boolean,

  description?: string,
  prerequisites?: string,
  corequisites?: string,
  schedule?: string,
  schedule_fall?: string,
  schedule_iap?: string,
  schedule_spring?: string,
  url?: string,
  related_subjects?: string[],
  rating?: number,
  enrollment_number?: number,
  in_class_hours?: number,
  out_of_class_hours?: number,
};

export type CisCourseCatalogRow = {
  ACADEMIC_YEAR: string,
  SUBJECT_ID: string,

  SUBJECT_CODE?: string,
  SUBJECT_NUMBER?: string,
  SOURCE_SUBJECT_ID?: string,
  PRINT_SUBJECT_ID?: string,
  IS_PRINTED_IN_BULLETIN?: "Y" | "N",
  DEPARTMENT_CODE?: string,
  DEPARTMENT_NAME?: string,
  EFFECTIVE_TERM_CODE?: string,
  SUBJECT_SHORT_TITLE?: string,
  SUBJECT_TITLE?: string,

  IS_VARIABLE_UNITS?: "Y" | "N",
  LECTURE_UNITS?: number,
  LAB_UNITS?: number,
  PREPARATION_UNITS?: number,
  TOTAL_UNITS?: number,
  DESIGN_UNITS?: number,

  GRADE_TYPE?: "L" | "P",
  GRADE_TYPE_DESC?: string,
  GRADE_RULE?: "J" | "N" | "R" | "T",
  GRADE_RULE_DESC?: string,
  HGN_CODE?: "H" | "G" | "U",
  HGN_DESC?: string,
  HGN_EXCEPT?: string,

  GIR_ATTRIBUTE?: string,
  GIR_ATTRIBUTE_DESC?: string,
  COMM_REQ_ATTRIBUTE?: string,
  COMM_REQ_ATTRIBUTE_DESC?: string,
  TUITION_ATTRIBUTE?: string,
  TUITION_ATTRIBUTE_DESC?: string,
  WRITE_REQ_ATTRIBUTE?: string,
  WRITE_REQ_ATTRIBUTE_DESC?: string,
  SUPERVISOR_ATTRIBUTE?: string,
  SUPERVISOR_ATTRIBUTE_DESC?: string,
  
  PREREQUISITES?: string,
  SUBJECT_DESCRIPTION?: string,
  JOINT_SUBJECTS?: string,
  SCHOOL_WIDE_ELECTIVE?: string,
  MEETS_WITH_SUBJECTS?: string,
  EQUIVALENT_SUBJECTS?: string,

  IS_OFFERED_THIS_YEAR?: "Y" | "N",
  IS_OFFERED_FALL_TERM?: "Y" | "N",
  IS_OFFERED_IAP?: "Y" | "N",
  IS_OFFERED_SPRING_TERM?: "Y" | "N",
  IS_OFFERED_SUMMER_TERM?: "Y" | "N",

  FALL_INSTRUCTORS?: string,
  SPRING_INSTRUCTORS?: string,
  STATUS_CHANGE?: string,

  LAST_ACTIVITY_DATE?: Date,
  WAREHOUSE_LOAD_DATE?: Date,

  MASTER_SUBJECT_ID?: string,

  HASS_ATTRIBUTE?: string,
  HASS_ATTRIBUTE_DESC?: string,

  TERM_DURATION?: string,
  GLOBAL_REGIONS?: string,
  GLOBAL_COUNTRIES?: string,
  ON_LINE_PAGE_NUMBER?: string,
};
