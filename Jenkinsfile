pipeline {
  agent any
  stages {
    stage('docker-compose') {
      steps {
        sh 'docker-compose -f docker-compose.yaml up'
      }
    }
  }
}