package main

import (
	"fmt"
)

func print_number(number int) {
	if number < 2 {
		return
	}

	print_number(number / 2)

	fmt.Println(number)
}

func main() {
	var input int
	fmt.Print("Enter a number: ")
	fmt.Scan(&input)

	print_number(input)
}
