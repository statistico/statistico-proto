build:
	protoc --proto_path=./proto \
		--go_out=paths=source_relative:go \
       --go-grpc_out=paths=source_relative:go \
       ./proto/*.proto

	protoc --proto_path=./proto \
		--js_out=import_style=commonjs,binary:js \
	   --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
	   ./proto/*.proto

	python3 -m grpc_tools.protoc \
	    --proto_path=./proto \
        --python_out=python \
        --grpc_python_out=python \
        ./proto/*.proto
