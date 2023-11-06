   #include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>
#include <time.h>
#include <stdio.h>

#define MAX_STUDENTS 40
#define NUM_STUDENTS 20
#define MIN_STUDY_TIME 5
#define MAX_STUDY_TIME 15
#define MAX_STUDENTS_IN_LIBRARY 8

pthread_t students[MAX_STUDENTS];
sem_t library_capacity;
int students_in_library = 0;
int outside_library = 0;
pthread_cond_t library_empty;
pthread_mutex_t library_mutex;

//int student_ids[MAX_STUDENTS]; // Store the student IDs in an array
int study_room[MAX_STUDENTS_IN_LIBRARY];
int waiting_room[NUM_STUDENTS - MAX_STUDENTS_IN_LIBRARY];

void printRooms() {
    printf("Study room: |");
    for (int i = 0; i < MAX_STUDENTS_IN_LIBRARY; i++) {
        if (study_room[i] != 0) {
            printf(" %d |", study_room[i]);
        } else {
            printf(" |");
        }
    }
    printf("\nWaiting room: |");
 for (int i = 0; i < NUM_STUDENTS - MAX_STUDENTS_IN_LIBRARY; i++) {
        if (waiting_room[i] != 0) {
            printf(" %d |", waiting_room[i]);
        } else {
            printf(" |");
        }
    }
    printf("\n");
}

void *student(void *arg) {
    int student_id = *((int *)arg);
    int study_time;
    int linenum;

    printf("Student %d was born\n", student_id);

    study_time = MIN_STUDY_TIME + (rand() % (MAX_STUDY_TIME - MIN_STUDY_TIME + 1));


    pthread_mutex_lock(&library_mutex);

     waiting_room[outside_library] = student_id;

  while (students_in_library >= MAX_STUDENTS_IN_LIBRARY) {

          pthread_cond_wait(&library_empty, &library_mutex);
    }

    //leave waiting list
    waiting_room[outside_library]=0;


    if (students_in_library < MAX_STUDENTS_IN_LIBRARY) {
        study_room[students_in_library] = student_id;
    } else {

    }

    students_in_library++;
    printRooms();
    pthread_mutex_unlock(&library_mutex);


    sleep(study_time);

    pthread_mutex_lock(&library_mutex);
    students_in_library--;
    printf("Student %d has finished studying and leaves the library.\n", student_id);

    study_room[students_in_library] = 0;
    printRooms();

  if (students_in_library == 0) {
        pthread_cond_broadcast(&library_empty);
    }


    pthread_mutex_unlock(&library_mutex);

    sem_post(&library_capacity);

    return NULL;
}
void shuffle(int *array, size_t n) {
    if (n > 1) {
        for (size_t i = 0; i < n - 1; i++) {
            size_t j = i + rand() / (RAND_MAX / (n - i) + 1);
            int temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
}
int main(int argc, char *argv[]) {
    int num_students = NUM_STUDENTS;
    pthread_mutex_init(&library_mutex, NULL);

    if (argc == 2) {
        num_students = atoi(argv[1]);
    }
                                                                                                                                                                                                                                                                          
    if (num_students < 1 || num_students > MAX_STUDENTS) {                                                                                                                                                                                                                
        printf("Invalid number of students. Please enter a number between 1 and %d.\n", MAX_STUDENTS);                                                                                                                                                                    
        return 1;                                                                                                                                                                                                                                                         
    }                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                          
    srand(time(NULL)); // Seed the random number generator                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                          
    int student_ids[num_students]; // Store the student IDs in an array                                                                                                                                                                                                   
 //   int waiting_room[num_students - MAX_STUDENTS_IN_LIBRARY];                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                          
    for (int i = 0; i < num_students; i++) {                                                                                                                                                                                                                              
        student_ids[i] = i + 1;                                                                                                                                                                                                                                           
   //     waiting_room[i] = 0; // Initialize waiting room                                                                                                                                                                                                                 
    }                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                          
  printf("Nop student IDs: ");                                                                                                                                                                                                                                            
    for (int i = 0; i < num_students; i++) {
        printf("%d ", student_ids[i]);
    }
    printf("\n");


    shuffle(student_ids, num_students);

  printf("Shuffled student IDs: ");
    for (int i = 0; i < num_students; i++) {
        printf("%d ", student_ids[i]);
    }
    printf("\n");

 sem_init(&library_capacity, 0, MAX_STUDENTS_IN_LIBRARY);
    pthread_cond_init(&library_empty, NULL);

    for (int i = 0; i < num_students; i++) {
        pthread_create(&students[i], NULL, student, &student_ids[i]);
        usleep(50000);
    }

    for (int i = 0; i < num_students; i++) {
        pthread_join(students[i], NULL);
    }

    // Destroy mutex and semaphore
    sem_destroy(&library_capacity);
    pthread_mutex_destroy(&library_mutex);
    pthread_cond_destroy(&library_empty);

    return 0;
}
struct StudentNode *findAndDeleteStudent(int student_id) {
    struct StudentNode *current = waiting_room_head;
    struct StudentNode *prev = NULL;

    while (current != NULL) {
        if (current->student_id == student_id) {
            if (prev != NULL) {
                prev->next = current->next;
            } else {
                // The element to be removed is the head of the list
                waiting_room_head = current->next;
            }

            if (current == waiting_room_tail) {
                waiting_room_tail = prev;
            }

            return current;
        }

        prev = current;
        current = current->next;
    }

    return NULL; // Student not found
}
