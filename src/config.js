const path = require('path');

const getConfig = () => ({
    dockerComposePath: path.join(__dirname, '../docker/docker-compose.yml'),
    dockerFilePath: path.join(__dirname, '../docker/Dockerfile'),
    alternativeDockerFilePath: path.join(
        __dirname,
        '../docker/Dockerfile_build'
    )
});

module.exports = { getConfig };
