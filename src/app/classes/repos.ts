export class Repos {
    constructor(
      public name: string,
      public description: string,
      public language: string,
      public html_url: string,
        public forks: any,
        public updated_at: Date) {}
}