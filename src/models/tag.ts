export interface Tag {
  id?: number;
  name: string;
  rssFeedId: number;
  createtAt: number;
}

export default {
  tag: "id++, name, rssFeedId, createtAt"
};
