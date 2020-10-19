build:
	protoc --proto_path=./data --go_out=paths=source_relative:./data/go data/*.proto