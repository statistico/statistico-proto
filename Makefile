build:
	protoc -I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway \
		-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--go_out go --go_opt paths=source_relative \
       --go-grpc_out go --go-grpc_opt paths=source_relative \
       --proto_path=. \
       ./*.proto

	protoc -I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway \
		-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
	   --grpc-gateway_out gateway --grpc-gateway_opt paths=source_relative \
	   --proto_path=. \
	   ./*.proto

	protoc -I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway \
		-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
       --openapiv2_out openapi --openapiv2_opt logtostderr=true --openapiv2_opt allow_merge=true,merge_file_name=statistico \
	   --proto_path=. \
	   ./*.proto