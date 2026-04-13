Markdown Enhancements are what make your docs look professional, structured, and easy to read in MkDocs.



```java
@GetMapping("/users")
public List<User> getUsers() {}
```


!!! warning
    This is important information.
!!! tip
    This is important information.
!!! info
    This is important information.

- [x] Completed task
- [ ] Pending task

Use `GET /users`

> This is important note




## Get Users API

=== "Java"

    ```java
    @GetMapping("/users")
    ```

=== "Curl"

    ```bash
    curl /users
    ```

=== "Response"

    ```json
    [{ "id": 1 }]
    ```