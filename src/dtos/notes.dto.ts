import { LinksDTO } from "./links.dto";
import { TagsDto } from "./tags.dto";

export interface NotesDTO {
  created_at: Date;
  description: string;
  id: number;
  tags: TagsDto[];
  links?: LinksDTO[];
  title: string;
  updated_at: string;
  user_id: number;
}
