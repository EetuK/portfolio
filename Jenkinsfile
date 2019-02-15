pipeline {
  agent none
  stages {
    stage('docker-compose') {
      steps {
        sh 'docker-compose -f docker-compose-build.yml up -d'
      }
    }
  }
}