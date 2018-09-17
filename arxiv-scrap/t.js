{
    "feed"
:
    {
        "@xmlns"
    :
        "http://www.w3.org/2005/Atom", "link"
    :
        {
            "@href"
        :
            "http://arxiv.org/api/query?search_query%3Dcat%3Acs.AI%26id_list%3D%26start%3D0%26max_results%3D10", "@rel"
        :
            "self", "@type"
        :
            "application/atom+xml"
        }
    ,
        "title"
    :
        {
            "@type"
        :
            "html", "#text"
        :
            "ArXiv Query: search_query=cat:cs.AI&id_list=&start=0&max_results=10"
        }
    ,
        "id"
    :
        "http://arxiv.org/api/xn611ryeCDnDvmVYOJ6SWZuh1qk", "updated"
    :
        "2018-09-10T00:00:00-04:00", "opensearch:totalResults"
    :
        {
            "@xmlns:opensearch"
        :
            "http://a9.com/-/spec/opensearch/1.1/", "#text"
        :
            "15605"
        }
    ,
        "opensearch:startIndex"
    :
        {
            "@xmlns:opensearch"
        :
            "http://a9.com/-/spec/opensearch/1.1/", "#text"
        :
            "0"
        }
    ,
        "opensearch:itemsPerPage"
    :
        {
            "@xmlns:opensearch"
        :
            "http://a9.com/-/spec/opensearch/1.1/", "#text"
        :
            "10"
        }
    ,
        "entry"
    :
        [{
            "id": "http://arxiv.org/abs/1809.02591v1",
            "updated": "2018-09-07T17:32:19Z",
            "published": "2018-09-07T17:32:19Z",
            "title": "Learning Invariances for Policy Generalization",
            "summary": "While recent progress has spawned very powerful machine learning systems,\nthose agents remain extremely specialized and fail to transfer the knowledge\nthey gain to similar yet unseen tasks. In this paper, we study a simple\nreinforcement learning problem and focus on learning policies that encode the\nproper invariances for generalization to different settings. We evaluate three\npotential methods for policy generalization: data augmentation, meta-learning\nand adversarial training. We find our data augmentation method to be effective,\nand study the potential of meta-learning and adversarial learning as\nalternative task-agnostic approaches.\n  Keywords: reinforcement learning, generalization, data augmentation,\nmeta-learning, adversarial learning.",
            "author": [{"name": "Remi Tachet des Combes"}, {"name": "Philip Bachman"}, {"name": "Harm van Seijen"}],
            "arxiv:comment": {"@xmlns:arxiv": "http://arxiv.org/schemas/atom", "#text": "7 pages, 1 figure"},
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02591v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02591v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.LG",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.LG", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "stat.ML", "@scheme": "http://arxiv.org/schemas/atom"}]
        }, {
            "id": "http://arxiv.org/abs/1809.02499v1",
            "updated": "2018-09-07T14:26:17Z",
            "published": "2018-09-07T14:26:17Z",
            "title": "MixUp as Locally Linear Out-Of-Manifold Regularization",
            "summary": "MixUp, a data augmentation approach through mixing random samples, has been\nshown to be able to significantly improve the predictive accuracy of the\ncurrent art of deep neural networks. The power of MixUp, however, is mostly\nestablished empirically and its working and effectiveness have not been\nexplained in any depth. In this paper, we develop a theoretical understanding\nfor MixUp as a form of out-of-manifold regularization, which constrains the\nmodel on the input space beyond the data manifold. This analytical study also\nenables us to identify MixUp's limitation caused by manifold intrusion, where\nsynthetic samples collide with real examples of the manifold. Such intrusion\ngives rise to over regularization and thereby under-fitting. To address this\nissue, we further propose a novel regularizer, where mixing policies are\nadaptively learned from the data and a manifold intrusion loss is embraced as\nto avoid collision with the data manifold. We empirically show, using several\nbenchmark datasets, our regularizer's effectiveness in terms of over\nregularization avoiding and accuracy improvement upon current art of deep\nclassification models and MixUp.",
            "author": [{"name": "Hongyu Guo"}, {"name": "Yongyi Mao"}, {"name": "Richong Zhang"}],
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02499v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02499v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.LG",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.LG", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "stat.ML", "@scheme": "http://arxiv.org/schemas/atom"}]
        }, {
            "id": "http://arxiv.org/abs/1809.02494v1",
            "updated": "2018-09-07T14:20:32Z",
            "published": "2018-09-07T14:20:32Z",
            "title": "Meteorologists and Students: A resource for language grounding of\n  geographical descriptors",
            "summary": "We present a data resource which can be useful for research purposes on\nlanguage grounding tasks in the context of geographical referring expression\ngeneration. The resource is composed of two data sets that encompass 25\ndifferent geographical descriptors and a set of associated graphical\nrepresentations, drawn as polygons on a map by two groups of human subjects:\nteenage students and expert meteorologists.",
            "author": [{"name": "Alejandro Ramos-Soto"}, {"name": "Ehud Reiter"}, {"name": "Kees van Deemter"}, {"name": "Jose M. Alonso"}, {"name": "Albert Gatt"}],
            "arxiv:comment": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "#text": "Resource paper, 5 pages, 6 figures, 1 table. Conference: INLG 2018"
            },
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02494v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02494v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.CL",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.CL", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }]
        }, {
            "id": "http://arxiv.org/abs/1809.02441v1",
            "updated": "2018-09-07T12:39:13Z",
            "published": "2018-09-07T12:39:13Z",
            "title": "HC-Net: Memory-based Incremental Dual-Network System for Continual\n  learning",
            "summary": "Training a neural network for a classification task typically assumes that\nthe data to train are given from the beginning. However, in the real world,\nadditional data accumulate gradually and the model requires additional training\nwithout accessing the old training data. This usually leads to the catastrophic\nforgetting problem which is inevitable for the traditional training methodology\nof neural networks. In this paper, we propose a memory-based continual learning\nmethod that is able to learn additional tasks while retaining the performance\nof previously learned tasks. Composed of two complementary networks, the\nHippocampus-net (H-net) and the Cortex-net (C-net), our model estimates the\nindex of the corresponding task for an input sample and utilizes a particular\nportion of itself with the estimated index. The C-net guarantees no degradation\nin the performance of the previously learned tasks and the H-net shows high\nconfidence in finding the origin of the input sample",
            "author": [{"name": "Jangho Kim"}, {"name": "Jeesoo Kim"}, {"name": "Nojun Kwak"}],
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02441v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02441v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.LG",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.LG", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "stat.ML", "@scheme": "http://arxiv.org/schemas/atom"}]
        }, {
            "id": "http://arxiv.org/abs/1809.02394v1",
            "updated": "2018-09-07T10:36:22Z",
            "published": "2018-09-07T10:36:22Z",
            "title": "Deep Feature Learning of Multi-Network Topology for Node Classification",
            "summary": "Networks are ubiquitous structure that describes complex relationships\nbetween different entities in the real world. As a critical component of\nprediction task over nodes in networks, learning the feature representation of\nnodes has become one of the most active areas recently. Network Embedding,\naiming to learn non-linear and low-dimensional feature representation based on\nnetwork topology, has been proved to be helpful on tasks of network analysis,\nespecially node classification. For many real-world systems, multiple types of\nrelations are naturally represented by multiple networks. However, existing\nnetwork embedding methods mainly focus on single network embedding and neglect\nthe information shared among different networks. In this paper, we propose a\nnovel multiple network embedding method based on semisupervised autoencoder,\nnamed DeepMNE, which captures complex topological structures of multi-networks\nand takes the correlation among multi-networks into account. We evaluate\nDeepMNE on the task of node classification with two real-world datasets. The\nexperimental results demonstrate the superior performance of our method over\nfour state-of-the-art algorithms.",
            "author": [{"name": "Hansheng Xue"}, {"name": "Jiajie Peng"}, {"name": "Xuequn Shang"}],
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02394v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02394v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.LG",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.LG", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "stat.ML", "@scheme": "http://arxiv.org/schemas/atom"}]
        }, {
            "id": "http://arxiv.org/abs/1809.02393v1",
            "updated": "2018-09-07T10:35:42Z",
            "published": "2018-09-07T10:35:42Z",
            "title": "Improving Neural Question Generation using Answer Separation",
            "summary": "Neural question generation (NQG) is the task of generating a question from a\ngiven passage with deep neural networks. Previous NQG models suffer from a\nproblem that a significant proportion of the generated questions include words\nin the question target, resulting in the generation of unintended questions. In\nthis paper, we propose answer-separated seq2seq, which better utilizes the\ninformation from both the passage and the target answer. By replacing the\ntarget answer in the original passage with a special token, our model learns to\nidentify which interrogative word should be used. We also propose a new module\ntermed keyword-net, which helps the model better capture the key information in\nthe target answer and generate an appropriate question. Experimental results\ndemonstrate that our answer separation method significantly reduces the number\nof improper questions which include answers. Consequently, our model\nsignificantly outperforms previous state-of-the-art NQG models.",
            "author": [{"name": "Yanghoon Kim"}, {"name": "Hwanhee Lee"}, {"name": "Joongbo Shin"}, {"name": "Kyomin Jung"}],
            "arxiv:comment": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "#text": "The paper is submitted to AAAI 2019 and under review"
            },
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02393v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02393v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.CL",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.CL", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "cs.NE", "@scheme": "http://arxiv.org/schemas/atom"}]
        }, {
            "id": "http://arxiv.org/abs/1809.02387v1",
            "updated": "2018-09-07T10:10:12Z",
            "published": "2018-09-07T10:10:12Z",
            "title": "Improving On-policy Learning with Statistical Reward Accumulation",
            "summary": "Deep reinforcement learning has obtained significant breakthroughs in recent\nyears. Most methods in deep-RL achieve good results via the maximization of the\nreward signal provided by the environment, typically in the form of discounted\ncumulative returns. Such reward signals represent the immediate feedback of a\nparticular action performed by an agent. However, tasks with sparse reward\nsignals are still challenging to on-policy methods. In this paper, we introduce\nan effective characterization of past reward statistics (which can be seen as\nlong-term feedback signals) to supplement this immediate reward feedback. In\nparticular, value functions are learned with multi-critics supervision,\nenabling complex value functions to be more easily approximated in on-policy\nlearning, even when the reward signals are sparse. We also introduce a novel\nexploration mechanism called \"hot-wiring\" that can give a boost to seemingly\ntrapped agents. We demonstrate the effectiveness of our advantage actor\nmulti-critic (A2MC) method across the discrete domains in Atari games as well\nas continuous domains in the MuJoCo environments. A video demo is provided at\nhttps://youtu.be/zBmpf3Yz8tc.",
            "author": [{"name": "Yubin Deng"}, {"name": "Ke Yu"}, {"name": "Dahua Lin"}, {"name": "Xiaoou Tang"}, {"name": "Chen Change Loy"}],
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02387v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02387v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.LG",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.LG", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "stat.ML", "@scheme": "http://arxiv.org/schemas/atom"}]
        }, {
            "id": "http://arxiv.org/abs/1809.02382v1",
            "updated": "2018-09-07T10:00:53Z",
            "published": "2018-09-07T10:00:53Z",
            "title": "On2Vec: Embedding-based Relation Prediction for Ontology Population",
            "summary": "Populating ontology graphs represents a long-standing problem for the\nSemantic Web community. Recent advances in translation-based graph embedding\nmethods for populating instance-level knowledge graphs lead to promising new\napproaching for the ontology population problem. However, unlike instance-level\ngraphs, the majority of relation facts in ontology graphs come with\ncomprehensive semantic relations, which often include the properties of\ntransitivity and symmetry, as well as hierarchical relations. These\ncomprehensive relations are often too complex for existing graph embedding\nmethods, and direct application of such methods is not feasible. Hence, we\npropose On2Vec, a novel translation-based graph embedding method for ontology\npopulation. On2Vec integrates two model components that effectively\ncharacterize comprehensive relation facts in ontology graphs. The first is the\nComponent-specific Model that encodes concepts and relations into\nlow-dimensional embedding spaces without a loss of relational properties; the\nsecond is the Hierarchy Model that performs focused learning of hierarchical\nrelation facts. Experiments on several well-known ontology graphs demonstrate\nthe promising capabilities of On2Vec in predicting and verifying new relation\nfacts. These promising results also make possible significant improvements in\nrelated methods.",
            "author": [{"name": "Muhao Chen"}, {"name": "Yingtao Tian"}, {"name": "Xuelu Chen"}, {"name": "Zijun Xue"}, {"name": "Carlo Zaniolo"}],
            "arxiv:doi": {"@xmlns:arxiv": "http://arxiv.org/schemas/atom", "#text": "10.1137/1.9781611975321.36"},
            "link": [{
                "@title": "doi",
                "@href": "http://dx.doi.org/10.1137/1.9781611975321.36",
                "@rel": "related"
            }, {
                "@href": "http://arxiv.org/abs/1809.02382v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02382v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:comment": {"@xmlns:arxiv": "http://arxiv.org/schemas/atom", "#text": "SDM-18. 9 pages, 3 figures"},
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.AI", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.IR",
                "@scheme": "http://arxiv.org/schemas/atom"
            }]
        }, {
            "id": "http://arxiv.org/abs/1809.02378v1",
            "updated": "2018-09-07T09:56:21Z",
            "published": "2018-09-07T09:56:21Z",
            "title": "Monte Carlo Tree Search with Scalable Simulation Periods for\n  Continuously Running Tasks",
            "summary": "Monte Carlo Tree Search (MCTS) is particularly adapted to domains where the\npotential actions can be represented as a tree of sequential decisions. For an\neffective action selection, MCTS performs many simulations to build a reliable\ntree representation of the decision space. As such, a bottleneck to MCTS\nappears when enough simulations cannot be performed between action selections.\nThis is particularly highlighted in continuously running tasks, for which the\ntime available to perform simulations between actions tends to be limited due\nto the environment's state constantly changing. In this paper, we present an\napproach that takes advantage of the anytime characteristic of MCTS to increase\nthe simulation time when allowed. Our approach is to effectively balance the\nprospect of selecting an action with the time that can be spared to perform\nMCTS simulations before the next action selection. For that, we considered the\nsimulation time as a decision variable to be selected alongside an action. We\nextended the Hierarchical Optimistic Optimization applied to Tree (HOOT) method\nto adapt our approach to environments with a continuous decision space. We\nevaluated our approach for environments with a continuous decision space\nthrough OpenAI gym's Pendulum and Continuous Mountain Car environments and for\nenvironments with discrete action space through the arcade learning environment\n(ALE) platform. The evaluation results show that, with variable simulation\ntimes, the proposed approach outperforms the conventional MCTS in the evaluated\ncontinuous decision space tasks and improves the performance of MCTS in most of\nthe ALE tasks.",
            "author": [{"name": "Seydou Ba"}, {"name": "Takuya Hiraoka"}, {"name": "Takashi Onishi"}, {"name": "Toru Nakata"}, {"name": "Yoshimasa Tsuruoka"}],
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02378v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02378v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": {"@term": "cs.AI", "@scheme": "http://arxiv.org/schemas/atom"}
        }, {
            "id": "http://arxiv.org/abs/1809.02343v1",
            "updated": "2018-09-07T08:18:01Z",
            "published": "2018-09-07T08:18:01Z",
            "title": "Exploiting local and global performance of candidate systems for\n  aggregation of summarization techniques",
            "summary": "With an ever growing number of extractive summarization techniques being\nproposed, there is less clarity then ever about how good each system is\ncompared to the rest. Several studies highlight the variance in performance of\nthese systems with change in datasets or even across documents within the same\ncorpus. An effective way to counter this variance and to make the systems more\nrobust could be to use inputs from multiple systems when generating a summary.\nIn the present work, we define a novel way of creating such ensemble by\nexploiting similarity between the content of candidate summaries to estimate\ntheir reliability. We define GlobalRank which captures the performance of a\ncandidate system on an overall corpus and LocalRank which estimates its\nperformance on a given document cluster. We then use these two scores to assign\na weight to each individual systems, which is then used to generate the new\naggregate ranking. Experiments on DUC2003 and DUC 2004 datasets show a\nsignificant improvement in terms of ROUGE score, over existing sate-of-art\ntechniques.",
            "author": [{"name": "Parth Mehta"}, {"name": "Prasenjit Majumder"}],
            "link": [{
                "@href": "http://arxiv.org/abs/1809.02343v1",
                "@rel": "alternate",
                "@type": "text/html"
            }, {
                "@title": "pdf",
                "@href": "http://arxiv.org/pdf/1809.02343v1",
                "@rel": "related",
                "@type": "application/pdf"
            }],
            "arxiv:primary_category": {
                "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
                "@term": "cs.IR",
                "@scheme": "http://arxiv.org/schemas/atom"
            },
            "category": [{"@term": "cs.IR", "@scheme": "http://arxiv.org/schemas/atom"}, {
                "@term": "cs.AI",
                "@scheme": "http://arxiv.org/schemas/atom"
            }, {"@term": "cs.CL", "@scheme": "http://arxiv.org/schemas/atom"}]
        }]
    }
}
