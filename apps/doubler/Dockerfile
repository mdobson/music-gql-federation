# This is the stage where the final production image is built
FROM golang:1.20-alpine as final

# Copy over artifacts from builder image
COPY /dist/apps/doubler/doubler /doubler

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0

# Expose default port
EXPOSE 8080

# Start server
CMD [ "doubler" ]