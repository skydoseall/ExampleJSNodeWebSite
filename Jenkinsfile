pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                echo 'Build Completed.'

                // sh 'npm install'
                // sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                echo 'Testing Completed.'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                echo 'Deployment Completed.'
            }
        }
    }
}