/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateGroups = /* GraphQL */ `
  subscription OnCreateGroups {
    onCreateGroups {
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
export const onUpdateGroups = /* GraphQL */ `
  subscription OnUpdateGroups {
    onUpdateGroups {
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
export const onDeleteGroups = /* GraphQL */ `
  subscription OnDeleteGroups {
    onDeleteGroups {
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
