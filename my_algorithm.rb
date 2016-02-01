class Card
  attr_accessor :ef, :front, :back
  def initialize(front, back)
    @front = front
    @back = back
    @ef = 1
  end

  def updateEf(fam)
    if fam <= 1
      ff = 0.85
    elsif fam == 2
      ff = 0.92
    elsif fam == 3
      ff = 1.1
    elsif fam == 4
      ff = 1.41
    else
      ff = 1.8
    end
    return ff;
  end

end

class Array
  def relocate
    first = self.shift
    index = first.ef * 3
    if index > self.length - 1
      self << first
    else
      self.take(index) + [first] + self.drop(index)
    end
    return self
  end

  def study
    stack = self.dup;
    while cards.length > 0
      puts(cards[0].front)
      puts("How well do you know this card?")
      fam = gets;

      stack[0].ef *= updateEf(fam);
      efVal = stack[0].ef;
      if efVal < 0.7225
        puts(stack[0].back)
        stack[0].ef = 0.7225
        stack.relocate
      elsif efVal < 5
        puts(stack[0].back)
        stack.relocate
      else efVal >= 5
        puts(stack[0].back)
        stack.shift
      end
    end
  end

end
