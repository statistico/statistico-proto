build:
	protoc -I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway \
		-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--go_out go --go_opt paths=source_relative \
       --go-grpc_out go --go-grpc_opt paths=source_relative \
       --proto_path=. \
       ./*.proto
