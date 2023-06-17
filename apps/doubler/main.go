package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func DoubleIt(x int) int {
	return x * 2
}

func GetConfig(key string) string {
	val, ok := os.LookupEnv(key)
	if !ok {
		return fmt.Sprintf("No value for %s\n", key)
	} else {
		return fmt.Sprintf("Value for %s is %s\n", key, val)
	}
}

func main() {
	r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": Hello("doubler"),
		})
	})

	r.GET("/config/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"message": GetConfig(id),
		})
	})

	r.POST("/double", func(c *gin.Context) {
		var json struct {
			Value int `json:"value"`
		}

		if c.BindJSON(&json) == nil {
			c.JSON(200, gin.H{
				"result": DoubleIt(json.Value),
			})
		}
	})
	
	r.Run(":8080")
	fmt.Println(Hello("doubler"))
}
