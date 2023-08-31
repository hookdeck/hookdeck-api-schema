package main

import (
	"context"
	"fmt"
	"os"

	hookdeck "github.com/hookdeck/hookdeck-go-sdk"
	hookdeckclient "github.com/hookdeck/hookdeck-go-sdk/client"
)

func main() {
	if err := run(); err != nil {
		os.Stderr.WriteString(err.Error())
		os.Exit(1)
	}
}

func run() error {
	client := hookdeckclient.NewClient()
	issueTriggersResponse, err := client.IssueTrigger.List(
		context.TODO(),
		new(hookdeck.IssueTriggerListRequest),
	)
	if err != nil {
		return err
	}
	fmt.Printf("Got %d issue triggers\n", len(issueTriggersResponse.Models))
	return nil
}
