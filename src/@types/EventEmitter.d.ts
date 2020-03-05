export type Event = {
  key: React.KeyboardEvent<HTMLDivElement>;
  change: React.ChangeEvent<HTMLInputElement>;
  changeTextArea: React.ChangeEvent<HTMLTextAreaElement>;
  select: React.ChangeEvent<HTMLSelectElement>;
  drag: React.MouseEvent<HTMLDivElement, DragEvent>;
  click: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  clickDiv: React.MouseEvent<HTMLDivElement, MouseEvent>;
};
