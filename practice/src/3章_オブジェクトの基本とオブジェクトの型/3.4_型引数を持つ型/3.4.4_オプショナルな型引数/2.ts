{
  type Animal = {
    name: string;
  };

  type Family<Parent, Child = Animal> = {
    mother: Parent;
    father: Parent;
    children: Child;
  };
}
