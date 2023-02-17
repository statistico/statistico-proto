build:
	protoc --proto_path=./proto \
		--go_out=paths=source_relative:go \
       --go-grpc_out=paths=source_relative:go \
       ./proto/*.proto

	protoc --proto_path=./proto \
		--ts_out=ts \
	   ./proto/*.proto

	python3 -m grpc_tools.protoc \
	    --proto_path=./proto \
        --python_out=python \
        --grpc_python_out=python \
        ./proto/*.proto
