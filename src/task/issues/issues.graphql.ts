// DO NOT EDIT. This is a generated file. Instead of this file, edit "issues.graphql".

const Issue = `#graphql
fragment Issue on Issue {
  id
  createdAt
  closedAt
  closed
  author {
    login
  }
  url
  number
  title
  labels(first: 10) {
    totalCount
    nodes {
      name
    }
  }
  body
  comments(first: 1) {
    totalCount
  }
  assignees(first: 3) {
    totalCount
  }
  repository {
    isPrivate
    nameWithOwner
    owner {
      login
    }
    name
  }
  reactionsTotal: reactions {
    totalCount
  }
  timelineItemsTotal: timelineItems {
    totalCount
  }
}`

export type Issue = {
  id: string
  createdAt: string
  closedAt: string | null
  closed: boolean
  author: {
    login: string
  } | null
  url: string
  number: number
  title: string
  labels: {
    totalCount: number
    nodes: Array<{
      name: string
    }> | null
  } | null
  body: string
  comments: {
    totalCount: number
  }
  assignees: {
    totalCount: number
  }
  repository: {
    isPrivate: boolean
    nameWithOwner: string
    owner: {
      login: string
    }
    name: string
  }
  reactionsTotal: {
    totalCount: number
  }
  timelineItemsTotal: {
    totalCount: number
  }
}

export const IssuesQuery = `#graphql
${Issue}
query IssuesQuery($username: String!, $num: Int = 100, $cursor: String) {
  user(login: $username) {
    issues(first: $num, after: $cursor, filterBy: {createdBy: $username}) {
      totalCount
      nodes {
        ...Issue
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}` as string & IssuesQuery

export type IssuesQuery = (vars: {
  username: string
  num?: number | null
  cursor?: string | null
}) => {
  user: {
    issues: {
      totalCount: number
      nodes: Array<{} & Issue> | null
      pageInfo: {
        hasNextPage: boolean
        endCursor: string | null
      }
    }
  } | null
  rateLimit: {
    limit: number
    cost: number
    remaining: number
    resetAt: string
  } | null
}
