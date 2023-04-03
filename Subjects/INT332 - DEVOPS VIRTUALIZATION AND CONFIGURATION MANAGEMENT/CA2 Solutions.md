### Create a mount volume on Windows using the Command Prompt and attach it to a container:

1. Open the Command Prompt and navigate to the directory where you want to create the mount volume.
2. Use the following command to create the mount volume:
	`docker volume create my_volume`
	Replace `my_volume` with the name you want to give to your volume.
4. Run a container and attach the volume to it using the following command:
	`docker run -it --mount source=ca2_volume,target=/data alpine sh`
	This command runs an Alpine Linux container and attaches the `my_volume` volume to the `/data` directory inside the container. The `-it` option starts the container in interactive mode and opens a shell.
6. Inside the container, create a file in the mounted volume using the following command:
	`echo "Hello World 12008698!" > /data/my_file.txt`
7. Exit the container by typing `exit` in the shell.
8. Check that the file exists in the mounted volume by using the following command:
	`docker run --rm -v ca2_volume:/data alpine ls /data`
9. This command runs a temporary Alpine Linux container, mounts the "my_volume" volume to the `/data` directory inside the container, and lists the files in the ` /data` directory. You should see the "my_file.txt" file in the output.