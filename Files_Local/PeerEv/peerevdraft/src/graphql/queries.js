/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            items {
                id
                qOwnerId
                qOwnerUsername
                qTitle
                qBody
                createdAt
            }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroups = /* GraphQL */ `
  query GetGroups($id: ID!) {
    getGroups(id: $id) {
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
export const listGroupss = /* GraphQL */ `
  query ListGroupss(
    $filter: ModelGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          numberofstudents
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
