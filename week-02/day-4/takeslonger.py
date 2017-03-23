# When saving this quote a disk error has occured. Please fix it.
# Add "always takes longer than" to the StringBuilder (quote) between the words "It" and "you"

quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

q = quote.find("you")
quote = quote[:q] + "always takes longer than " + quote[q:]

print(quote)
