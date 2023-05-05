export interface IDraggable {
  children: React.ReactNode;
  onDragDown: () => void;
  styleClass?: string;
}
