# 🏛️ JPMorgan Chase & Co. — Midas Core Financial Service

[![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Apache Kafka](https://img.shields.io/badge/Apache_Kafka-Event%20Streaming-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)](https://kafka.apache.org/)
[![Maven](https://img.shields.io/badge/Maven-Build%20System-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)](https://maven.apache.org/)

A high-performance financial data microservice built in **Java** and **Spring Boot**, completed as part of the **JPMorgan Chase & Co. Advanced Software Engineering Virtual Experience Program** on Forage. 

The service ingests real-time financial transaction streams via **Apache Kafka**, queries external incentive REST services, persists user balances with **Spring Data JPA**, and exposes authenticated balance inquiry endpoints.

---

## 🔍 Program Overview & Architecture

Modern financial clearing engines require sub-millisecond event streaming, strict transaction atomicity, and resilient decoupled architecture. 

During this program, the **Midas Core** banking backend was engineered across 5 core milestones:

```
┌────────────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│  Financial Transaction │ ───> │   Apache Kafka Broker   │ ───> │   Kafka Consumer Stream │
│  Event Stream          │      │   (Topic: transactions) │      │   (TransactionListener) │
└────────────────────────┘      └─────────────────────────┘      └────────────┬────────────┘
                                                                              │
                                                                 ┌────────────▼────────────┐
                                                                 │ Incentives REST Service │
                                                                 │ (Bonus Calculation)    │
                                                                 └────────────┬────────────┘
                                                                              │
                                                                 ┌────────────▼────────────┐
                                                                 │ Spring Data JPA Entity  │
                                                                 │ (User & Balance Records)│
                                                                 └────────────┬────────────┘
                                                                              │
                                                                 ┌────────────▼────────────┐
                                                                 │  GET /balance Endpoint  │
                                                                 │  (BalanceController)    │
                                                                 └─────────────────────────┘
```

---

## ✨ Key Engineering Milestones

1. **Spring Boot & Microservice Initialization:**
   - Established the foundational Spring Boot runtime environment with Maven multi-module structure.
   - Configured application properties, logging profiles, and embedded container lifecycles.

2. **Real-Time Apache Kafka Ingestion:**
   - Designed Kafka consumer components listening to financial transaction topics.
   - Serialized and deserialized complex banking payloads with robust payload validation.

3. **External Incentives REST API Integration:**
   - Integrated a Spring `RestTemplate` / `WebClient` service to query an external rewards calculation server for eligible transactions.
   - Handled network resiliency and fallback responses when processing bonus credits.

4. **Database Persistence & Transactional Integrity:**
   - Designed `User` and `TransactionRecord` entities with Spring Data JPA.
   - Implemented atomicity to ensure debit/credit balance adjustments execute reliably without race conditions.

5. **REST API Endpoint (`/balance`):**
   - Implemented `BalanceController` exposing secure HTTP GET endpoints.
   - Query user balances by ID with structured JSON responses and error guards.

---

## 📁 Repository Structure

```
forage-midas/
├── src/
│   ├── main/
│   │   ├── java/com/jpmc/midascore/
│   │   │   ├── MidasCoreApplication.java  # Main Spring Boot entrypoint
│   │   │   ├── BalanceController.java     # REST API controller (/balance)
│   │   │   ├── component/                 # Kafka listeners & transaction consumers
│   │   │   ├── entity/                    # User & transaction database JPA entities
│   │   │   ├── foundation/                # Transaction models & data transfer objects
│   │   │   └── repository/                # Spring Data JPA repositories
│   │   └── resources/
│   │       └── application.yml            # Kafka & datasource configuration
│   └── test/                              # Automated integration and unit tests
├── pom.xml                                # Maven dependencies & build plugins
├── mvnw / mvnw.cmd                        # Maven wrapper scripts
└── README.md                              # Project documentation
```

---

## 🛠️ Tech Stack

- **Language:** Java 17+
- **Framework:** Spring Boot 3
- **Messaging:** Apache Kafka
- **Data & ORM:** Spring Data JPA, Hibernate, H2 Database
- **Build Tool:** Apache Maven
- **Architecture:** Event-Driven Microservices

---

## 🚀 Running Locally

### 1. Prerequisites
- Java JDK 17 or higher
- Maven 3.8+ (or use `./mvnw`)

### 2. Build the Application
```bash
./mvnw clean install
```

### 3. Launch Midas Core
```bash
./mvnw spring-boot:run
```

---

## 👤 Author

**Purushotham Balamurali**  
- **GitHub:** [@pbalamurali74-hue](https://github.com/pbalamurali74-hue)  
- **LinkedIn:** [purushothambalamurali](https://www.linkedin.com/in/purushothambalamurali/)  
- **Portfolio:** [Purushotham Balamurali Portfolio](https://github.com/pbalamurali74-hue)
