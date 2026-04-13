<div class="mermaid">
flowchart TD
    subgraph SYSTEM["System Architecture"]
        A[Load Balancer]
        B[EC2 Server]
        C[RDBMS Database]

        A --> B
        B --> C
        C --> B
    end
</div>