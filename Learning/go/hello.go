// 注明属于哪个包
package main

// 注明使用哪个包1
// import "fmt"

// 注明使用哪个包2
import (
	"fmt"
)

// 一般用户声明全局变量
var (
	a int
	b bool
)

// 常量声明
const (
	a1 = '1'
)

// iota
const (
	a2 = iota // 0
	a3        // 1
	a4        // 2
)

// 入口函数 如果有init则先执行init
func main() {
	// 大写标识符表示外部可访问
	// var Group = "test"

	// 小写表示外部不可访问 仅包内可访问
	var stockcode = 123
	var enddate = "2020-12-31"
	var url = "Code=%d&endDate=%s"
	var target_url = fmt.Sprintf(url, stockcode, enddate)
	fmt.Println(target_url)

	// := 是声明语句 只能出现在函数体中
	// a := 1

	// 交换两个相同类型的变量的值
	// a, b = b, a

	// _用于抛弃值 如下值5被抛弃 因为声明的变量必须被使用 但是有时候你并不想使用从某处得到的所有返回值
	// _, a = 5, 7

	// 多变量声明1
	// var a1, b1, c1 int
	// a1, b1, c1 = 1, 2, 3

	// 多变量声明2
	// a2, b2, c2 := 1, 2, 3

}
