/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      courseOwnerId
      courseOwnerUsername
      courseTitle
      courseBody
      courseStart
      courseEnd
      caponnumberofcollaborators
      createdAt
      hastask {
        id
        taskOwnerId
        taskOwnerUsername
        taskTitle
        taskBody
        taskcontent
        numberofQuestions
        course {
          id
          courseOwnerId
          courseOwnerUsername
          courseTitle
          courseBody
          courseStart
          courseEnd
          caponnumberofcollaborators
          createdAt
          numberofstudents
          updatedAt
        }
        question {
          nextToken
        }
        createdAt
        updatedAt
      }
      numberofstudents
      groups {
        items {
          id
          groupOwnerId
          groupOwnerUsername
          numberofStudents
          averagemark
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      courseOwnerId
      courseOwnerUsername
      courseTitle
      courseBody
      courseStart
      courseEnd
      caponnumberofcollaborators
      createdAt
      hastask {
        id
        taskOwnerId
        taskOwnerUsername
        taskTitle
        taskBody
        taskcontent
        numberofQuestions
        course {
          id
          courseOwnerId
          courseOwnerUsername
          courseTitle
          courseBody
          courseStart
          courseEnd
          caponnumberofcollaborators
          createdAt
          numberofstudents
          updatedAt
        }
        question {
          nextToken
        }
        createdAt
        updatedAt
      }
      numberofstudents
      groups {
        items {
          id
          groupOwnerId
          groupOwnerUsername
          numberofStudents
          averagemark
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      courseOwnerId
      courseOwnerUsername
      courseTitle
      courseBody
      courseStart
      courseEnd
      caponnumberofcollaborators
      createdAt
      hastask {
        id
        taskOwnerId
        taskOwnerUsername
        taskTitle
        taskBody
        taskcontent
        numberofQuestions
        course {
          id
          courseOwnerId
          courseOwnerUsername
          courseTitle
          courseBody
          courseStart
          courseEnd
          caponnumberofcollaborators
          createdAt
          numberofstudents
          updatedAt
        }
        question {
          nextToken
        }
        createdAt
        updatedAt
      }
      numberofstudents
      groups {
        items {
          id
          groupOwnerId
          groupOwnerUsername
          numberofStudents
          averagemark
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      taskOwnerId
      taskOwnerUsername
      taskTitle
      taskBody
      taskcontent
      numberofQuestions
      course {
        id
        courseOwnerId
        courseOwnerUsername
        courseTitle
        courseBody
        courseStart
        courseEnd
        caponnumberofcollaborators
        createdAt
        hastask {
          id
          taskOwnerId
          taskOwnerUsername
          taskTitle
          taskBody
          taskcontent
          numberofQuestions
          createdAt
          updatedAt
        }
        numberofstudents
        groups {
          nextToken
        }
        updatedAt
      }
      question {
        items {
          id
          qOwnerId
          qOwnerUsername
          qTitle
          qBody
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      taskOwnerId
      taskOwnerUsername
      taskTitle
      taskBody
      taskcontent
      numberofQuestions
      course {
        id
        courseOwnerId
        courseOwnerUsername
        courseTitle
        courseBody
        courseStart
        courseEnd
        caponnumberofcollaborators
        createdAt
        hastask {
          id
          taskOwnerId
          taskOwnerUsername
          taskTitle
          taskBody
          taskcontent
          numberofQuestions
          createdAt
          updatedAt
        }
        numberofstudents
        groups {
          nextToken
        }
        updatedAt
      }
      question {
        items {
          id
          qOwnerId
          qOwnerUsername
          qTitle
          qBody
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      taskOwnerId
      taskOwnerUsername
      taskTitle
      taskBody
      taskcontent
      numberofQuestions
      course {
        id
        courseOwnerId
        courseOwnerUsername
        courseTitle
        courseBody
        courseStart
        courseEnd
        caponnumberofcollaborators
        createdAt
        hastask {
          id
          taskOwnerId
          taskOwnerUsername
          taskTitle
          taskBody
          taskcontent
          numberofQuestions
          createdAt
          updatedAt
        }
        numberofstudents
        groups {
          nextToken
        }
        updatedAt
      }
      question {
        items {
          id
          qOwnerId
          qOwnerUsername
          qTitle
          qBody
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      qOwnerId
      qOwnerUsername
      qTitle
      qBody
      task {
        id
        taskOwnerId
        taskOwnerUsername
        taskTitle
        taskBody
        taskcontent
        numberofQuestions
        course {
          id
          courseOwnerId
          courseOwnerUsername
          courseTitle
          courseBody
          courseStart
          courseEnd
          caponnumberofcollaborators
          createdAt
          numberofstudents
          updatedAt
        }
        question {
            id
            qOwnerId
            qOwnerUsername
            qTitle
            qBody
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      qOwnerId
      qOwnerUsername
      qTitle
      qBody
      task {
        id
        taskOwnerId
        taskOwnerUsername
        taskTitle
        taskBody
        taskcontent
        numberofQuestions
        course {
          id
          courseOwnerId
          courseOwnerUsername
          courseTitle
          courseBody
          courseStart
          courseEnd
          caponnumberofcollaborators
          createdAt
          numberofstudents
          updatedAt
        }
        question {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      qOwnerId
      qOwnerUsername
      qTitle
      qBody
      task {
        id
        taskOwnerId
        taskOwnerUsername
        taskTitle
        taskBody
        taskcontent
        numberofQuestions
        course {
          id
          courseOwnerId
          courseOwnerUsername
          courseTitle
          courseBody
          courseStart
          courseEnd
          caponnumberofcollaborators
          createdAt
          numberofstudents
          updatedAt
        }
        question {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGroups = /* GraphQL */ `
  mutation CreateGroups(
    $input: CreateGroupsInput!
    $condition: ModelGroupsConditionInput
  ) {
    createGroups(input: $input, condition: $condition) {
      id
      groupOwnerId
      groupOwnerUsername
      numberofStudents
      averagemark
      course {
        id
        courseOwnerId
        courseOwnerUsername
        courseTitle
        courseBody
        courseStart
        courseEnd
        caponnumberofcollaborators
        createdAt
        hastask {
          id
          taskOwnerId
          taskOwnerUsername
          taskTitle
          taskBody
          taskcontent
          numberofQuestions
          createdAt
          updatedAt
        }
        numberofstudents
        groups {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroups = /* GraphQL */ `
  mutation UpdateGroups(
    $input: UpdateGroupsInput!
    $condition: ModelGroupsConditionInput
  ) {
    updateGroups(input: $input, condition: $condition) {
      id
      groupOwnerId
      groupOwnerUsername
      numberofStudents
      averagemark
      course {
        id
        courseOwnerId
        courseOwnerUsername
        courseTitle
        courseBody
        courseStart
        courseEnd
        caponnumberofcollaborators
        createdAt
        hastask {
          id
          taskOwnerId
          taskOwnerUsername
          taskTitle
          taskBody
          taskcontent
          numberofQuestions
          createdAt
          updatedAt
        }
        numberofstudents
        groups {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroups = /* GraphQL */ `
  mutation DeleteGroups(
    $input: DeleteGroupsInput!
    $condition: ModelGroupsConditionInput
  ) {
    deleteGroups(input: $input, condition: $condition) {
      id
      groupOwnerId
      groupOwnerUsername
      numberofStudents
      averagemark
      course {
        id
        courseOwnerId
        courseOwnerUsername
        courseTitle
        courseBody
        courseStart
        courseEnd
        caponnumberofcollaborators
        createdAt
        hastask {
          id
          taskOwnerId
          taskOwnerUsername
          taskTitle
          taskBody
          taskcontent
          numberofQuestions
          createdAt
          updatedAt
        }
        numberofstudents
        groups {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
