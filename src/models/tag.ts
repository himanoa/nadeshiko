export interface Tag {
  id?: number;
  name: string;
  rssFeedId: number;
  createtAt: number;
}

export const scheme = {
  tag: "++id, name, rssFeedId, createtAt"
};
export default Tag;
