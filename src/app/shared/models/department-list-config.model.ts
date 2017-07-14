export class DepartmentListConfig {
  type: string = 'all';

  filters: {
    name?: string,
    mainLeaderName?: string
  } = {};
}
