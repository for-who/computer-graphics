class Color {
  public constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number,
  ) {}

  static black() {
    return new Color(0, 0, 0, 255)
  }

  static white() {
    return new Color(255, 255, 255, 255)
  }
}

export default Color