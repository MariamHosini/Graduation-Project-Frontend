import { NonNullableFormBuilder } from '@angular/forms';

export interface IComment {
  commentID: number;

  userName: string;
  createdAt: Date;
  content: string;
}
