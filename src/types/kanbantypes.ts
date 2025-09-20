export interface CardData {
    id: string;
    title: string;
    desc?: string;
  }
  
  export type ColumnKey = "todo" | "doing" | "done";
  
  export interface BoardState {
    todo: CardData[];
    doing: CardData[];
    done: CardData[];
  }
  
  export interface DragSource {
    column: ColumnKey;
    index: number;
  }
  
  export interface DragDest {
    column: ColumnKey;
    index: number;
  }