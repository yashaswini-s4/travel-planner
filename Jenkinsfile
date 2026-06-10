pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build React Application') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                bat '''
                sonar-scanner.bat ^
                -D"sonar.projectKey=travel-planner" ^
                -D"sonar.sources=." ^
                -D"sonar.host.url=http://localhost:9000" ^
                -D"sonar.token=sqp_5e0464dbaaa76d055756afb57bb0190f31a726a0"
                '''
            }
        }

        stage('Dependency Check') {
            steps {
                dependencyCheck additionalArguments: '--scan .',
                                odcInstallation: 'OWASP-Dependency-Check'
            }
        }

        stage('Publish Dependency Report') {
            steps {
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t travel-planner-frontend ./frontend'
            }
        }

    }

    post {
        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}