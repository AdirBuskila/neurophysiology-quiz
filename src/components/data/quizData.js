const quizData = [
    {
        question: "What is a synapse?",
        options: [
            "A connection between two glial cells",
            "The junction between two neurons where communication occurs",
            "The part of the neuron that generates an action potential",
            "A type of neurotransmitter"
        ],
        correct: 1,
        explanation: "A synapse is the junction between two neurons where neurotransmitters facilitate communication between them."
    },
    {
        question: "Which of the following is NOT a type of synapse?",
        options: [
            "Chemical",
            "Electrical",
            "Mechanical",
            "Both A and B exist"
        ],
        correct: 2,
        explanation: "Chemical and electrical synapses exist, but mechanical synapses are not a recognized type in neurophysiology."
    },
    {
        question: "What triggers neurotransmitter release at the presynaptic terminal?",
        options: [
            "The influx of Na+ ions",
            "The release of ATP",
            "The influx of Ca2+ ions",
            "The opening of Cl- channels"
        ],
        correct: 2,
        explanation: "Calcium (Ca2+) influx triggers vesicle fusion, releasing neurotransmitters into the synaptic cleft."
    },
    {
        question: "Which neurotransmitter is primarily responsible for muscle contraction?",
        options: [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "GABA"
        ],
        correct: 2,
        explanation: "Acetylcholine (ACh) is released at the neuromuscular junction to stimulate muscle contraction."
    },
    {
        question: "What is the function of SNARE proteins?",
        options: [
            "Transport neurotransmitters across the synaptic cleft",
            "Facilitate vesicle fusion with the presynaptic membrane",
            "Act as ion channels on the postsynaptic neuron",
            "Regulate enzyme activity in neurotransmitter synthesis"
        ],
        correct: 1,
        explanation: "SNARE proteins are essential for vesicle fusion, allowing neurotransmitter release at the synapse."
    },
    {
        question: "How many pairs of spinal nerves arise from the spinal cord?",
        options: [
            "12",
            "24",
            "31",
            "40"
        ],
        correct: 2,
        explanation: "The human spinal cord has 31 pairs of spinal nerves that emerge from different vertebral levels."
    },
    {
        question: "Which enlargement of the spinal cord supplies the lower limbs?",
        options: [
            "Cervical enlargement",
            "Lumbar enlargement",
            "Sacral enlargement",
            "Thoracic enlargement"
        ],
        correct: 1,
        explanation: "The lumbar enlargement contains neurons that control movement and sensation in the lower limbs."
    },
    {
        question: "Which part of the brain controls vital functions like heart rate and breathing?",
        options: [
            "Cerebellum",
            "Midbrain",
            "Medulla oblongata",
            "Hypothalamus"
        ],
        correct: 2,
        explanation: "The medulla oblongata controls autonomic functions such as breathing, heart rate, and blood pressure."
    },
    {
        question: "Which neurotransmitter is directly affected by SSRIs (Selective Serotonin Reuptake Inhibitors)?",
        options: [
            "Dopamine",
            "GABA",
            "Serotonin",
            "Acetylcholine"
        ],
        correct: 2,
        explanation: "SSRIs block serotonin reuptake, increasing its availability in the synapse and improving mood."
    },
    {
        question: "Which cranial nerve is a major component of the parasympathetic nervous system?",
        options: [
            "Optic (II)",
            "Trigeminal (V)",
            "Facial (VII)",
            "Vagus (X)"
        ],
        correct: 3,
        explanation: "The Vagus nerve (cranial nerve X) is a key parasympathetic nerve involved in regulating heart rate and digestion."
    },
    {
        question: "What is the function of the blood-brain barrier?",
        options: [
            "Facilitates passive diffusion of molecules",
            "Prevents most toxins and pathogens from entering the brain",
            "Directly delivers hormones to the brain",
            "Regulates body temperature"
        ],
        correct: 1,
        explanation: "The blood-brain barrier protects the brain by restricting the entry of harmful substances."
    },
    {
        question: "Which structure serves as the relay center for sensory information before reaching the cerebral cortex?",
        options: [
            "Thalamus",
            "Hypothalamus",
            "Basal nuclei",
            "Cerebellum"
        ],
        correct: 0,
        explanation: "The thalamus acts as a relay station, processing sensory signals before they reach the cerebral cortex."
    },
    {
        question: "What type of receptor binds to acetylcholine at parasympathetic effector organs?",
        options: [
            "Alpha-adrenergic",
            "Beta-adrenergic",
            "Nicotinic",
            "Muscarinic"
        ],
        correct: 3,
        explanation: "Muscarinic receptors bind acetylcholine at parasympathetic target organs, mediating its effects."
    },
    {
        question: "Which autonomic division primarily increases heart rate?",
        options: [
            "Parasympathetic",
            "Sympathetic",
            "Enteric",
            "Somatic"
        ],
        correct: 1,
        explanation: "The sympathetic nervous system increases heart rate as part of the fight-or-flight response."
    },
    {
        question: "Which autonomic receptors typically cause excitation of target organs?",
        options: [
            "Alpha-1 and Beta-1",
            "Alpha-2 and Beta-2",
            "Nicotinic and muscarinic",
            "Dopaminergic and serotoninergic"
        ],
        correct: 0,
        explanation: "Alpha-1 and Beta-1 receptors generally stimulate organ activity when activated by norepinephrine."
    },
    {
        question: "Which autonomic receptors typically cause inhibition of target organs?",
        options: [
            "Alpha-1 and Beta-1",
            "Alpha-2 and Beta-2",
            "Nicotinic and muscarinic",
            "Dopaminergic and serotoninergic"
        ],
        correct: 1,
        explanation: "Alpha-2 and Beta-2 receptors typically mediate inhibitory effects, reducing organ activity."
    },
    {
        question: "What is the function of the enteric nervous system?",
        options: [
            "Controls heart rate and breathing",
            "Regulates digestion independently of the CNS",
            "Coordinates voluntary muscle movement",
            "Manages sensory input from the skin"
        ],
        correct: 1,
        explanation: "The enteric nervous system is often called the 'second brain' because it can regulate digestion autonomously."
    },
    {
        question: "What is the function of the dura mater?",
        options: [
            "Transmits sensory signals",
            "Protects the brain and spinal cord",
            "Carries cerebrospinal fluid",
            "Contains neurons for motor control"
        ],
        correct: 1,
        explanation: "The dura mater is the outermost layer of the meninges and provides structural protection for the brain and spinal cord."
    },
    {
        question: "Which neurotransmitter is released by most postganglionic sympathetic neurons?",
        options: [
            "Acetylcholine (ACh)",
            "Norepinephrine (NE)",
            "Dopamine",
            "Serotonin"
        ],
        correct: 1,
        explanation: "Most postganglionic sympathetic neurons release norepinephrine (NE) to activate adrenergic receptors."
    },
    {
        question: "Where are the preganglionic neurons of the parasympathetic division located?",
        options: [
            "Thoracic and lumbar spinal cord",
            "Brainstem and sacral spinal cord",
            "Sympathetic ganglia",
            "Cerebellum"
        ],
        correct: 1,
        explanation: "Preganglionic parasympathetic neurons originate in the brainstem and sacral spinal cord, regulating 'rest-and-digest' functions."
    },
    {
        question: "Which autonomic division primarily decreases heart rate?",
        options: [
            "Parasympathetic",
            "Sympathetic",
            "Enteric",
            "Somatic"
        ],
        correct: 0,
        explanation: "The parasympathetic nervous system slows heart rate via the vagus nerve (cranial nerve X)."
    },
    {
        question: "Which spinal cord structure contains myelinated axons forming tracts?",
        options: [
            "Gray matter",
            "White matter",
            "Dorsal root ganglion",
            "Ventral root"
        ],
        correct: 1,
        explanation: "White matter in the spinal cord contains myelinated axons that transmit signals between different regions of the CNS."
    },
    {
        question: "What type of reflex prevents excessive tension in tendons?",
        options: [
            "Stretch reflex",
            "Golgi tendon reflex",
            "Withdrawal reflex",
            "Crossed extensor reflex"
        ],
        correct: 1,
        explanation: "The Golgi tendon reflex protects tendons from excessive force by causing muscle relaxation when tension is too high."
    },
    {
        question: "What is the function of reciprocal innervation in reflexes?",
        options: [
            "Causes relaxation of one muscle when its antagonist contracts",
            "Inhibits the spinal cord's sensory neurons",
            "Activates interneurons to generate conscious movement",
            "Prevents neurotransmitter release"
        ],
        correct: 0,
        explanation: "Reciprocal innervation allows for smooth movement by ensuring opposing muscles are not contracting simultaneously."
    },
    {
        question: "What structure produces cerebrospinal fluid (CSF)?",
        options: [
            "Medulla oblongata",
            "Pineal gland",
            "Choroid plexus",
            "Cerebellum"
        ],
        correct: 2,
        explanation: "The choroid plexus, located in the brain's ventricles, produces cerebrospinal fluid (CSF), which cushions and protects the brain."
    },
    {
        question: "Which part of the brain is the main control center for the autonomic nervous system?",
        options: [
            "Cerebellum",
            "Thalamus",
            "Hypothalamus",
            "Medulla oblongata"
        ],
        correct: 2,
        explanation: "The hypothalamus regulates autonomic functions, including body temperature, hunger, and the autonomic nervous system."
    },
    {
        question: "Which cranial nerve regulates heart rate and digestion?",
        options: [
            "Vagus (X)",
            "Abducens (VI)",
            "Oculomotor (III)",
            "Trochlear (IV)"
        ],
        correct: 0,
        explanation: "The vagus nerve (Cranial Nerve X) plays a critical role in parasympathetic control of the heart and digestive system."
    },
    {
        question: "Which neurotransmitter is linked to reward and addiction?",
        options: [
            "Serotonin",
            "Dopamine",
            "GABA",
            "Glutamate"
        ],
        correct: 1,
        explanation: "Dopamine is involved in the brain’s reward system and is crucial for motivation and addiction-related behaviors."
    },
    {
        question: "Where does cerebrospinal fluid flow after leaving the fourth ventricle?",
        options: [
            "Directly into the bloodstream",
            "Subarachnoid space",
            "Spinal cord only",
            "Medial sulcus"
        ],
        correct: 1,
        explanation: "CSF flows from the fourth ventricle into the subarachnoid space, where it circulates around the brain and spinal cord."
    },
    {
        question: "What is the function of autonomic reflexes?",
        options: [
            "Control voluntary muscle movement",
            "Regulate visceral organs, glands, and blood vessels",
            "Control spinal reflex arcs",
            "Generate conscious thought"
        ],
        correct: 1,
        explanation: "Autonomic reflexes regulate involuntary functions such as heart rate, digestion, and blood pressure."
    },
    {
        question: "Which lobe of the cerebrum is responsible for voluntary motor function and decision-making?",
        options: [
            "Occipital lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Frontal lobe"
        ],
        correct: 3,
        explanation: "The frontal lobe controls voluntary motor movements and is involved in decision-making, reasoning, and problem-solving."
    },
    {
        question: "Which brain structure processes visual information?",
        options: [
            "Occipital lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Cerebellum"
        ],
        correct: 0,
        explanation: "The occipital lobe is responsible for processing visual information received from the eyes."
    },
    {
        question: "Which part of the brain is responsible for balance and coordination?",
        options: [
            "Thalamus",
            "Hypothalamus",
            "Cerebellum",
            "Midbrain"
        ],
        correct: 2,
        explanation: "The cerebellum coordinates muscle movements and maintains posture and balance."
    },
    {
        question: "Which structure regulates emotions, hunger, and body temperature?",
        options: [
            "Thalamus",
            "Hypothalamus",
            "Cerebellum",
            "Medulla oblongata"
        ],
        correct: 1,
        explanation: "The hypothalamus regulates emotions, body temperature, hunger, and autonomic functions."
    },
    {
        question: "Which neurotransmitter is primarily involved in inhibitory signaling in the brain?",
        options: [
            "Glutamate",
            "Acetylcholine",
            "GABA",
            "Dopamine"
        ],
        correct: 2,
        explanation: "GABA (gamma-aminobutyric acid) is the main inhibitory neurotransmitter in the brain, reducing neuronal excitability."
    },
    {
        question: "Which enzyme is responsible for breaking down catecholamines like dopamine and norepinephrine?",
        options: [
            "Acetylcholinesterase",
            "Monoamine oxidase (MAO)",
            "Glutaminase",
            "GABA transaminase"
        ],
        correct: 1,
        explanation: "Monoamine oxidase (MAO) breaks down catecholamines, including dopamine and norepinephrine, regulating their levels in the brain."
    },
    {
        question: "Which structure in the synapse contains neurotransmitter molecules?",
        options: [
            "Dendrites",
            "Axon hillock",
            "Synaptic vesicles",
            "Myelin sheath"
        ],
        correct: 2,
        explanation: "Neurotransmitters are stored in synaptic vesicles in the presynaptic terminal before being released into the synaptic cleft."
    },
    {
        question: "Which process allows neurotransmitters to return to the presynaptic terminal after release?",
        options: [
            "Exocytosis",
            "Reuptake",
            "Summation",
            "Depolarization"
        ],
        correct: 1,
        explanation: "Reuptake is the process where neurotransmitters are reabsorbed by the presynaptic neuron for reuse or degradation."
    },
    {
        question: "Which ion is crucial for neurotransmitter release?",
        options: [
            "Na+",
            "K+",
            "Ca2+",
            "Cl-"
        ],
        correct: 2,
        explanation: "Calcium (Ca2+) influx into the presynaptic terminal is essential for triggering neurotransmitter release."
    },
    {
        question: "Which autonomic receptors typically cause excitation of target organs?",
        options: [
            "Alpha-1 and Beta-1",
            "Alpha-2 and Beta-2",
            "Nicotinic and muscarinic",
            "Dopaminergic and serotoninergic"
        ],
        correct: 0,
        explanation: "Alpha-1 and Beta-1 receptors generally stimulate organ activity when activated by norepinephrine."
    },
    {
        question: "Which autonomic receptors typically cause inhibition of target organs?",
        options: [
            "Alpha-1 and Beta-1",
            "Alpha-2 and Beta-2",
            "Nicotinic and muscarinic",
            "Dopaminergic and serotoninergic"
        ],
        correct: 1,
        explanation: "Alpha-2 and Beta-2 receptors typically mediate inhibitory effects, reducing organ activity."
    },
    {
        question: "What is the primary function of the limbic system?",
        options: [
            "Coordination of movement",
            "Processing sensory information",
            "Regulation of emotions and memory",
            "Control of respiration"
        ],
        correct: 2,
        explanation: "The limbic system is responsible for emotions, motivation, and memory formation."
    },
    {
        question: "Which cranial nerve is responsible for vision?",
        options: [
            "Olfactory (I)",
            "Optic (II)",
            "Trigeminal (V)",
            "Facial (VII)"
        ],
        correct: 1,
        explanation: "The optic nerve (Cranial Nerve II) transmits visual information from the retina to the brain."
    },
    {
        question: "Which cranial nerve controls facial expressions?",
        options: [
            "Olfactory (I)",
            "Optic (II)",
            "Facial (VII)",
            "Vagus (X)"
        ],
        correct: 2,
        explanation: "The facial nerve (Cranial Nerve VII) controls muscles responsible for facial expressions."
    },
    {
        question: "Which cranial nerve is involved in hearing and balance?",
        options: [
            "Trigeminal (V)",
            "Vestibulocochlear (VIII)",
            "Glossopharyngeal (IX)",
            "Accessory (XI)"
        ],
        correct: 1,
        explanation: "The vestibulocochlear nerve (Cranial Nerve VIII) carries auditory and balance-related information to the brain."
    },
    {
        question: "What is the function of the blood-brain barrier?",
        options: [
            "Facilitates passive diffusion of molecules",
            "Prevents most toxins and pathogens from entering the brain",
            "Directly delivers hormones to the brain",
            "Regulates body temperature"
        ],
        correct: 1,
        explanation: "The blood-brain barrier restricts harmful substances from entering the brain while allowing essential nutrients to pass."
    },
    {
        question: "Which substances can pass through the blood-brain barrier easily?",
        options: [
            "Large proteins",
            "Lipid-soluble substances like nicotine and alcohol",
            "Water-soluble substances only",
            "Only glucose and oxygen"
        ],
        correct: 1,
        explanation: "Lipid-soluble substances such as nicotine, alcohol, and some anesthetics can cross the blood-brain barrier easily."
    },
    {
        question: "Which autonomic division is responsible for 'fight-or-flight' responses?",
        options: [
            "Parasympathetic nervous system",
            "Sympathetic nervous system",
            "Somatic nervous system",
            "Enteric nervous system"
        ],
        correct: 1,
        explanation: "The sympathetic nervous system prepares the body for stress-related activities by increasing heart rate, dilating pupils, and redirecting blood flow to muscles."
    },
    {
        question: "What neurotransmitter is released at the neuromuscular junction?",
        options: [
            "Dopamine",
            "Acetylcholine",
            "Norepinephrine",
            "Serotonin"
        ],
        correct: 1,
        explanation: "Acetylcholine (ACh) is released at the neuromuscular junction to stimulate muscle contraction."
    },
    {
        question: "What is the function of the cerebellum?",
        options: [
            "Controls heart rate and breathing",
            "Regulates emotions",
            "Coordinates movement and balance",
            "Processes sensory information"
        ],
        correct: 2,
        explanation: "The cerebellum is responsible for coordinating movement, posture, and balance."
    },
    {
        question: "Which brain structure acts as a relay center for almost all sensory information?",
        options: [
            "Hypothalamus",
            "Cerebellum",
            "Thalamus",
            "Midbrain"
        ],
        correct: 2,
        explanation: "The thalamus acts as a relay center, processing and transmitting sensory information to the cerebral cortex."
    },
    {
        question: "Which neurotransmitter is involved in regulating mood, sleep, and appetite?",
        options: [
            "Serotonin",
            "Dopamine",
            "GABA",
            "Glutamate"
        ],
        correct: 0,
        explanation: "Serotonin plays a crucial role in mood regulation, sleep cycles, and appetite."
    },
    {
        question: "Which lobe of the brain processes auditory information?",
        options: [
            "Frontal lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Occipital lobe"
        ],
        correct: 2,
        explanation: "The temporal lobe is responsible for processing auditory information and is involved in memory formation."
    },
    {
        question: "Which brain region regulates body temperature, hunger, and thirst?",
        options: [
            "Thalamus",
            "Hypothalamus",
            "Cerebellum",
            "Pons"
        ],
        correct: 1,
        explanation: "The hypothalamus maintains homeostasis by regulating body temperature, hunger, and thirst."
    },
    {
        question: "Which part of the nervous system directly controls voluntary muscle movements?",
        options: [
            "Autonomic nervous system",
            "Somatic nervous system",
            "Parasympathetic nervous system",
            "Sympathetic nervous system"
        ],
        correct: 1,
        explanation: "The somatic nervous system controls voluntary muscle movements via motor neurons."
    },
    {
        question: "What is the role of Schwann cells in the peripheral nervous system?",
        options: [
            "Transmit electrical impulses",
            "Produce myelin for axons",
            "Regulate neurotransmitter release",
            "Control involuntary movements"
        ],
        correct: 1,
        explanation: "Schwann cells produce myelin, which insulates axons and speeds up nerve signal transmission."
    },
    {
        question: "Which type of glial cell provides structural support and regulates the extracellular environment in the CNS?",
        options: [
            "Schwann cells",
            "Astrocytes",
            "Oligodendrocytes",
            "Microglia"
        ],
        correct: 1,
        explanation: "Astrocytes provide structural support, regulate the extracellular environment, and help maintain the blood-brain barrier."
    },
    {
        question: "Which neurotransmitter is primarily responsible for excitatory signaling in the brain?",
        options: [
            "GABA",
            "Glutamate",
            "Dopamine",
            "Acetylcholine"
        ],
        correct: 1,
        explanation: "Glutamate is the primary excitatory neurotransmitter in the brain, playing a key role in learning and memory."
    },
    {
        question: "Which type of receptor does norepinephrine primarily bind to?",
        options: [
            "Muscarinic receptors",
            "Nicotinic receptors",
            "Adrenergic receptors",
            "Serotonergic receptors"
        ],
        correct: 2,
        explanation: "Norepinephrine primarily binds to adrenergic receptors, which mediate sympathetic nervous system responses."
    },
    {
        question: "What is saltatory conduction?",
        options: [
            "The slow transmission of electrical signals along axons",
            "The transmission of electrical signals in the absence of myelin",
            "The jumping of action potentials from one node of Ranvier to another",
            "The generation of new neurons in the brain"
        ],
        correct: 2,
        explanation: "Saltatory conduction occurs in myelinated axons, where action potentials jump between nodes of Ranvier, increasing conduction speed."
    },
    {
        question: "Which part of the brain processes visual information?",
        options: [
            "Temporal lobe",
            "Parietal lobe",
            "Frontal lobe",
            "Occipital lobe"
        ],
        correct: 3,
        explanation: "The occipital lobe is responsible for processing visual information received from the eyes."
    },
    {
        question: "Which structure is involved in long-term memory formation?",
        options: [
            "Thalamus",
            "Hippocampus",
            "Cerebellum",
            "Medulla oblongata"
        ],
        correct: 1,
        explanation: "The hippocampus is crucial for the formation of long-term memories and spatial navigation."
    },
    {
        question: "Which of the following ions is most responsible for the resting membrane potential?",
        options: [
            "Calcium (Ca2+)",
            "Sodium (Na+)",
            "Chloride (Cl-)",
            "Potassium (K+)"
        ],
        correct: 3,
        explanation: "Potassium (K+) plays the largest role in establishing the resting membrane potential due to its permeability through leak channels."
    },
    {
        question: "Which neurotransmitter is linked to movement and is deficient in Parkinson’s disease?",
        options: [
            "Serotonin",
            "Dopamine",
            "Acetylcholine",
            "Glutamate"
        ],
        correct: 1,
        explanation: "Dopamine is involved in motor control, and its deficiency is a hallmark of Parkinson’s disease."
    },
    {
        question: "What is the function of oligodendrocytes?",
        options: [
            "Provide immune defense in the CNS",
            "Produce myelin in the CNS",
            "Support neurotransmitter release",
            "Regulate blood flow to neurons"
        ],
        correct: 1,
        explanation: "Oligodendrocytes produce myelin in the CNS, which insulates axons and increases conduction speed."
    },
    {
        question: "What does the term 'plasticity' refer to in the nervous system?",
        options: [
            "The ability of neurons to regenerate after injury",
            "The capacity of neurons to change connections and functions based on experience",
            "The formation of new neurons throughout life",
            "The conduction of signals in the brain"
        ],
        correct: 1,
        explanation: "Neuroplasticity refers to the nervous system’s ability to reorganize itself by forming new neural connections."
    },
    {
        question: "Which ion is most important in generating an action potential?",
        options: [
            "Potassium (K+)",
            "Sodium (Na+)",
            "Chloride (Cl-)",
            "Calcium (Ca2+)"
        ],
        correct: 1,
        explanation: "Sodium (Na+) influx is crucial in depolarizing the neuron and generating an action potential."
    },
    {
        question: "What is the primary role of microglia in the central nervous system?",
        options: [
            "Provide nutrients to neurons",
            "Act as the immune defense of the CNS",
            "Form the blood-brain barrier",
            "Produce cerebrospinal fluid"
        ],
        correct: 1,
        explanation: "Microglia act as the immune cells of the CNS, removing waste and defending against pathogens."
    },
    {
        question: "Which part of the neuron is responsible for receiving signals from other neurons?",
        options: [
            "Axon terminal",
            "Dendrites",
            "Cell body",
            "Myelin sheath"
        ],
        correct: 1,
        explanation: "Dendrites receive incoming signals from other neurons and transmit them toward the cell body."
    },
    {
        question: "Which type of receptor is found at the neuromuscular junction?",
        options: [
            "Adrenergic receptor",
            "Muscarinic receptor",
            "Nicotinic receptor",
            "Dopaminergic receptor"
        ],
        correct: 2,
        explanation: "Nicotinic receptors mediate fast synaptic transmission at the neuromuscular junction, responding to acetylcholine."
    },
    {
        question: "Which area of the brain is associated with speech production?",
        options: [
            "Wernicke's area",
            "Broca's area",
            "Hippocampus",
            "Cerebellum"
        ],
        correct: 1,
        explanation: "Broca's area, located in the frontal lobe, is responsible for the motor aspects of speech production."
    },
    {
        question: "Which type of glial cell forms myelin in the CNS?",
        options: [
            "Astrocytes",
            "Microglia",
            "Oligodendrocytes",
            "Schwann cells"
        ],
        correct: 2,
        explanation: "Oligodendrocytes form myelin in the CNS, which helps insulate axons and speeds up neural transmission."
    },
    {
        question: "Which part of the brain is primarily responsible for regulating circadian rhythms?",
        options: [
            "Hippocampus",
            "Hypothalamus",
            "Thalamus",
            "Pons"
        ],
        correct: 1,
        explanation: "The hypothalamus, specifically the suprachiasmatic nucleus, regulates the body's internal clock and circadian rhythms."
    },
    {
        question: "What is the term for the period during which a neuron cannot fire a new action potential?",
        options: [
            "Depolarization",
            "Hyperpolarization",
            "Absolute refractory period",
            "Relative refractory period"
        ],
        correct: 2,
        explanation: "The absolute refractory period is when a neuron cannot generate another action potential, no matter how strong the stimulus."
    },
    {
        question: "Which neurotransmitter is most associated with pain perception and relief?",
        options: [
            "GABA",
            "Dopamine",
            "Endorphins",
            "Glutamate"
        ],
        correct: 2,
        explanation: "Endorphins are natural opioids that reduce pain perception and promote a sense of well-being."
    },
    {
        question: "Which part of the nervous system is responsible for reflex actions?",
        options: [
            "Cerebral cortex",
            "Brainstem",
            "Spinal cord",
            "Thalamus"
        ],
        correct: 2,
        explanation: "The spinal cord processes reflex actions through simple neural circuits, bypassing the brain for faster responses."
    },
    {
        question: "Which type of ion channel is responsible for the resting membrane potential?",
        options: [
            "Voltage-gated sodium channels",
            "Ligand-gated potassium channels",
            "Leak potassium channels",
            "Calcium channels"
        ],
        correct: 2,
        explanation: "Leak potassium channels allow a steady outflow of K+ ions, maintaining the resting membrane potential."
    },
    {
        question: "What is the primary function of the sodium-potassium pump?",
        options: [
            "Allow passive diffusion of ions",
            "Transport sodium and potassium ions against their concentration gradients",
            "Depolarize the neuron",
            "Inhibit neurotransmitter release"
        ],
        correct: 1,
        explanation: "The sodium-potassium pump actively transports Na+ out of the cell and K+ into the cell, maintaining ion gradients."
    },
    {
        question: "Which phase of the action potential is characterized by Na+ influx?",
        options: [
            "Resting phase",
            "Depolarization",
            "Repolarization",
            "Hyperpolarization"
        ],
        correct: 1,
        explanation: "Depolarization occurs when voltage-gated sodium channels open, allowing Na+ to rush into the neuron."
    },
    {
        question: "Which glial cell is responsible for forming the blood-brain barrier?",
        options: [
            "Astrocytes",
            "Oligodendrocytes",
            "Microglia",
            "Ependymal cells"
        ],
        correct: 0,
        explanation: "Astrocytes help form the blood-brain barrier by regulating the passage of substances into the brain."
    },
    {
        question: "Which ion is responsible for repolarization during an action potential?",
        options: [
            "Na+",
            "Ca2+",
            "Cl-",
            "K+"
        ],
        correct: 3,
        explanation: "Repolarization occurs when voltage-gated potassium channels open, allowing K+ to leave the cell."
    },
    {
        question: "What is the refractory period?",
        options: [
            "A period of increased excitability",
            "A period when a neuron cannot fire another action potential",
            "The time required for neurotransmitter release",
            "The duration of synaptic transmission"
        ],
        correct: 1,
        explanation: "The refractory period is when a neuron cannot fire another action potential immediately after one has occurred."
    },
    {
        question: "Which structure in the neuron propagates action potentials?",
        options: [
            "Dendrites",
            "Axon",
            "Cell body",
            "Synaptic terminal"
        ],
        correct: 1,
        explanation: "The axon conducts action potentials away from the neuron's cell body toward the synaptic terminals."
    },
    {
        question: "What is the role of myelin in nerve conduction?",
        options: [
            "Slows down action potential propagation",
            "Increases action potential speed via saltatory conduction",
            "Acts as a neurotransmitter receptor",
            "Inhibits neurotransmitter release"
        ],
        correct: 1,
        explanation: "Myelin speeds up action potential conduction by allowing the signal to 'jump' between nodes of Ranvier."
    },
    {
        question: "Which neurotransmitter is primarily excitatory in the central nervous system?",
        options: [
            "GABA",
            "Glutamate",
            "Serotonin",
            "Dopamine"
        ],
        correct: 1,
        explanation: "Glutamate is the primary excitatory neurotransmitter in the CNS, playing a role in learning and memory."
    },
    {
        question: "Which neurotransmitter is most associated with sleep regulation?",
        options: [
            "Serotonin",
            "Dopamine",
            "Glutamate",
            "Norepinephrine"
        ],
        correct: 0,
        explanation: "Serotonin is involved in regulating sleep, mood, and appetite."
    },
    {
        question: "Which sensory receptor type detects changes in temperature?",
        options: [
            "Mechanoreceptors",
            "Thermoreceptors",
            "Nociceptors",
            "Photoreceptors"
        ],
        correct: 1,
        explanation: "Thermoreceptors respond to changes in temperature, detecting heat or cold stimuli."
    },
    {
        question: "What is the function of nociceptors?",
        options: [
            "Detect changes in pH",
            "Sense pain and tissue damage",
            "Respond to mechanical pressure",
            "Detect changes in light"
        ],
        correct: 1,
        explanation: "Nociceptors are sensory receptors responsible for detecting pain and noxious stimuli."
    },
    {
        question: "Which part of the brain is primarily responsible for regulating emotions?",
        options: [
            "Cerebellum",
            "Limbic system",
            "Brainstem",
            "Thalamus"
        ],
        correct: 1,
        explanation: "The limbic system, including the amygdala and hippocampus, plays a key role in emotion processing."
    },
    {
        question: "Which type of glial cell produces cerebrospinal fluid (CSF)?",
        options: [
            "Astrocytes",
            "Ependymal cells",
            "Microglia",
            "Schwann cells"
        ],
        correct: 1,
        explanation: "Ependymal cells line the ventricles of the brain and produce cerebrospinal fluid."
    },
    {
        question: "Which structure acts as the primary relay for sensory information?",
        options: [
            "Cerebellum",
            "Thalamus",
            "Hypothalamus",
            "Basal ganglia"
        ],
        correct: 1,
        explanation: "The thalamus acts as the brain's relay center for sensory information before sending it to the cortex."
    },
    {
        question: "Which neurotransmitter is involved in movement and coordination and is deficient in Parkinson's disease?",
        options: [
            "Acetylcholine",
            "Dopamine",
            "GABA",
            "Glutamate"
        ],
        correct: 1,
        explanation: "Dopamine is crucial for motor control, and its deficiency leads to Parkinson’s disease."
    },
    {
        question: "Which part of the nervous system is responsible for involuntary actions?",
        options: [
            "Somatic nervous system",
            "Autonomic nervous system",
            "Cerebral cortex",
            "Basal ganglia"
        ],
        correct: 1,
        explanation: "The autonomic nervous system controls involuntary actions such as heart rate and digestion."
    },
    {
        question: "Which region of the brain is responsible for memory consolidation?",
        options: [
            "Cerebellum",
            "Hippocampus",
            "Prefrontal cortex",
            "Brainstem"
        ],
        correct: 1,
        explanation: "The hippocampus is crucial for consolidating short-term memories into long-term storage."
    },
    {
        question: "Which type of receptor is responsible for detecting light in the retina?",
        options: [
            "Mechanoreceptors",
            "Nociceptors",
            "Photoreceptors",
            "Chemoreceptors"
        ],
        correct: 2,
        explanation: "Photoreceptors in the retina detect light and allow vision."
    },
    {
        question: "Which cranial nerve is primarily responsible for eye movement?",
        options: [
            "Trigeminal (V)",
            "Abducens (VI)",
            "Facial (VII)",
            "Vagus (X)"
        ],
        correct: 1,
        explanation: "The abducens nerve (cranial nerve VI) controls lateral eye movement."
    },
    {
        question: "Which structure in the ear is responsible for converting sound waves into neural signals?",
        options: [
            "Cochlea",
            "Tympanic membrane",
            "Semicircular canals",
            "Ossicles"
        ],
        correct: 0,
        explanation: "The cochlea contains hair cells that transduce sound vibrations into neural signals."
    },
    {
        question: "Which neurotransmitter is primarily inhibitory in the brain?",
        options: [
            "Glutamate",
            "GABA",
            "Dopamine",
            "Serotonin"
        ],
        correct: 1,
        explanation: "GABA is the main inhibitory neurotransmitter in the brain, reducing neuronal excitability."
    },
    {
        question: "Which of the following is NOT a function of the muscular system?",
        options: [
            "Movement of the body",
            "Production of body heat",
            "Generation of nerve impulses",
            "Constriction of organs and vessels"
        ],
        correct: 2,
        explanation: "The muscular system is responsible for movement, heat production, and organ constriction, but nerve impulse generation is a function of the nervous system."
    },
    {
        question: "Which property allows a muscle to return to its original shape after stretching?",
        options: [
            "Contractility",
            "Excitability",
            "Extensibility",
            "Elasticity"
        ],
        correct: 3,
        explanation: "Elasticity is the ability of muscle to recoil to its original resting length after being stretched."
    },
    {
        question: "Which type of muscle is responsible for propelling food through the digestive tract?",
        options: [
            "Skeletal muscle",
            "Smooth muscle",
            "Cardiac muscle",
            "Voluntary muscle"
        ],
        correct: 1,
        explanation: "Smooth muscle, found in the walls of hollow organs, propels food through the digestive tract."
    },
    {
        question: "Which connective tissue covering surrounds an individual muscle fiber?",
        options: [
            "Epimysium",
            "Perimysium",
            "Endomysium",
            "Fasciculus"
        ],
        correct: 2,
        explanation: "The endomysium is a loose connective tissue layer that surrounds each muscle fiber."
    },
    {
        question: "What is the basic structural and functional unit of a skeletal muscle?",
        options: [
            "Sarcomere",
            "Myofibril",
            "Actin filament",
            "Fascicle"
        ],
        correct: 0,
        explanation: "A sarcomere is the functional unit of skeletal muscle responsible for contraction."
    },
    {
        question: "What is the role of calcium ions in muscle contraction?",
        options: [
            "They bind to myosin heads to start contraction",
            "They activate troponin, allowing actin-myosin interaction",
            "They provide ATP for energy",
            "They trigger synaptic vesicle release in the motor neuron"
        ],
        correct: 1,
        explanation: "Calcium binds to troponin, causing a shift in tropomyosin and exposing actin's binding sites for myosin."
    },
    {
        question: "What enzyme breaks down acetylcholine at the neuromuscular junction?",
        options: [
            "Monoamine oxidase",
            "Choline acetyltransferase",
            "Acetylcholinesterase",
            "ATPase"
        ],
        correct: 2,
        explanation: "Acetylcholinesterase degrades acetylcholine, stopping muscle contraction."
    },
    {
        question: "Which type of skeletal muscle contraction does NOT change muscle length?",
        options: [
            "Isotonic contraction",
            "Eccentric contraction",
            "Concentric contraction",
            "Isometric contraction"
        ],
        correct: 3,
        explanation: "Isometric contractions generate force without changing muscle length, such as in posture maintenance."
    },
    {
        question: "Which process allows muscles to generate ATP in the absence of oxygen?",
        options: [
            "Aerobic metabolism",
            "Anaerobic glycolysis",
            "Oxidative phosphorylation",
            "Electron transport chain"
        ],
        correct: 1,
        explanation: "Anaerobic glycolysis breaks down glucose to produce ATP quickly but generates lactic acid."
    },
    {
        question: "Which muscle fiber type is most resistant to fatigue?",
        options: [
            "Fast-twitch fibers",
            "Slow-twitch fibers",
            "Intermediate fibers",
            "Myosin-heavy fibers"
        ],
        correct: 1,
        explanation: "Slow-twitch (Type I) fibers have more mitochondria and myoglobin, making them highly resistant to fatigue."
    },
    {
        question: "What is the major function of myoglobin in muscle cells?",
        options: [
            "Stores ATP",
            "Facilitates oxygen storage and transport",
            "Breaks down glycogen",
            "Produces actin filaments"
        ],
        correct: 1,
        explanation: "Myoglobin stores oxygen and enhances oxygen supply for aerobic metabolism."
    },
    {
        question: "Which ion is primarily responsible for muscle relaxation by being actively transported back into the sarcoplasmic reticulum?",
        options: [
            "Sodium (Na+)",
            "Potassium (K+)",
            "Calcium (Ca2+)",
            "Chloride (Cl-)"
        ],
        correct: 2,
        explanation: "Calcium is actively transported back into the sarcoplasmic reticulum to allow muscle relaxation."
    },
    {
        question: "Which term refers to the muscle's ability to respond to a stimulus?",
        options: [
            "Extensibility",
            "Contractility",
            "Excitability",
            "Elasticity"
        ],
        correct: 2,
        explanation: "Excitability is the ability of a muscle to respond to a stimulus, such as a nerve signal."
    },
    {
        question: "Which structure stores and releases calcium in muscle cells?",
        options: [
            "Mitochondria",
            "Golgi apparatus",
            "Sarcoplasmic reticulum",
            "Ribosomes"
        ],
        correct: 2,
        explanation: "The sarcoplasmic reticulum stores and releases calcium, which is essential for muscle contraction."
    },
    {
        question: "Which type of muscle contraction lengthens the muscle while maintaining tension?",
        options: [
            "Isometric contraction",
            "Eccentric contraction",
            "Concentric contraction",
            "Tetanic contraction"
        ],
        correct: 1,
        explanation: "Eccentric contractions occur when the muscle lengthens while still generating force, such as lowering a heavy object."
    },
    {
        question: "Which part of the sarcomere shortens during muscle contraction?",
        options: [
            "A band",
            "H zone",
            "Z disk",
            "M line"
        ],
        correct: 1,
        explanation: "The H zone shortens as actin and myosin filaments slide past each other."
    },
    {
        question: "Which neurotransmitter is used at the neuromuscular junction?",
        options: [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "Norepinephrine"
        ],
        correct: 2,
        explanation: "Acetylcholine is the neurotransmitter that stimulates muscle contraction at the neuromuscular junction."
    },
    {
        question: "Which muscle fiber type has the greatest capacity for aerobic metabolism?",
        options: [
            "Type I (Slow-twitch)",
            "Type IIa (Fast-twitch, oxidative)",
            "Type IIb (Fast-twitch, glycolytic)",
            "Myosin-heavy chain fibers"
        ],
        correct: 0,
        explanation: "Slow-twitch fibers (Type I) have a high aerobic capacity due to their abundance of mitochondria and myoglobin."
    },
    {
        question: "Which metabolic process produces the most ATP per glucose molecule?",
        options: [
            "Anaerobic glycolysis",
            "Aerobic respiration",
            "Creatine phosphate pathway",
            "Fermentation"
        ],
        correct: 1,
        explanation: "Aerobic respiration produces 36 ATP per glucose molecule, making it the most efficient process."
    },
    {
        question: "What causes rigor mortis?",
        options: [
            "Lactic acid buildup",
            "Lack of ATP preventing cross-bridge detachment",
            "Hyperactivation of the nervous system",
            "Excessive calcium release"
        ],
        correct: 1,
        explanation: "Rigor mortis occurs when ATP is depleted, preventing myosin from detaching from actin."
    }
];

export default quizData;
