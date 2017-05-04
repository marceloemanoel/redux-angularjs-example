export default class SubRedditSelectorController {
  options: string[];
  value: string;
  onChange: () => Function;

  selectionChanged(): void {
    this.onChange()(this.value);
  }
}
